<template>
  <LandingNavbar v-if="$route.path === '/'"></LandingNavbar>
  <LandingNavbar2 v-else></LandingNavbar2>

  <slot></slot>

  <LandingFooter v-if="$route.path !== '/'"></LandingFooter>
</template>
