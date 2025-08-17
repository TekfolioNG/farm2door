<template>
  <LandingNavbar v-if="$route.path !== '/'"></LandingNavbar>

  <slot></slot>

  <LandingFooter v-if="$route.path !== '/'"></LandingFooter>
</template>
