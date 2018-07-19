<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    fixed
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link.title"
        color="secondary"
        round
        py-0
        :to="link.link"

      >
        {{ link.title }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-0
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {title: 'Home', link: '/'},
        {title: 'About Us', link: '/'},
        {title: 'Team', link: '/'},
        {title: 'Services', link: '/'},
        {title: 'Blog', link: '/slot'},
        {title: 'Contact Us', link: '/'}
      ]
    })
  }
</script>
 