<script setup lang="ts">
definePageMeta({
  layout: "landing"
});

useHead({
  meta: [
    { property: 'og:title', content: 'Xstrato Prime Nigeria Limited | Engineering Excellence & Infrastructure Development' },
    { property: 'og:description', content: 'Leading engineering and construction company delivering innovative infrastructure solutions across Nigeria. Specializing in civil works, telecommunications, renewable energy, and project management.' },
    { property: 'og:image', content: 'https://xstrato.com/xstrato-og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Xstrato Prime Nigeria Limited - Engineering Excellence' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Xstrato Prime Nigeria Limited | Engineering Excellence' },
    { name: 'twitter:description', content: 'Leading engineering and construction company delivering innovative infrastructure solutions across Nigeria.' },
    { name: 'twitter:image', content: 'https://xstrato.com/xstrato-og-image.jpg' }
  ]
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
  </LandingContainer>
</template>
