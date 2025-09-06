// api/src/types/env.ts
export interface Env {
  // D1 Database binding
  DB: D1Database;

  // Environment variables
  ENVIRONMENT: string;
  JWT_SECRET: string;
  JWT_REFRESH_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_REFRESH_EXPIRES_IN: string;
  FRONTEND_URL: string;

  // OAuth secrets (set via wrangler secret)
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  MICROSOFT_CLIENT_ID?: string;
  MICROSOFT_CLIENT_SECRET?: string;
}

// Add global type declarations for Cloudflare Workers
declare global {
  interface D1Database {
    prepare(sql: string): D1PreparedStatement;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
    exec(sql: string): Promise<D1ExecResult>;
  }

  interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = Record<string, unknown>>(colName?: string): Promise<T | null>;
    run<T = Record<string, unknown>>(): Promise<D1Result<T>>;
    all<T = Record<string, unknown>>(): Promise<D1Result<T[]>>;
    raw<T = unknown[]>(): Promise<T[]>;
  }

  interface D1Result<T = Record<string, unknown>> {
    results: T;
    success: boolean;
    meta: {
      duration: number;
      size_after: number;
      rows_read: number;
      rows_written: number;
      last_row_id: number;
      changed_db: boolean;
    };
  }

  interface D1ExecResult {
    count: number;
    duration: number;
  }
}