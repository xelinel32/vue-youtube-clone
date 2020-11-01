<template>
  <v-app>
    <router-view name="NavBar"></router-view>
    <router-view name="StudioNavBar"></router-view>
    <v-main
      :class="{
        'content-bg': !['SignIn', 'SignUp', 'Dashboard', 'Video', 'Detail'].includes(this.$route.name) ? true : false,
      }"
    >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  .content-bg {
    background-color: #f9f9f9;
  }
  .card {
    background: #f9f9f9 !important;
  }
</style>
