<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top has-shadow">
    <div class="wrapper">
      <img src="@/assets/doorsheild.png" width="350" height="100" alt="MyTrainTicket">
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/submit-review">Submit Review</RouterLink>
        <RouterLink to="/door-overview">Door Overview</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/scan-barcode">Scan QR</RouterLink>
      </nav>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  padding-left: 40px;
  box-shadow: 0 2px 0 0 var(--vt-c-widget-box-shadow);
  padding-top: 15px;
 /* background-color: grey;*/
 /* display: inline-block;*/
  width: 100%;
  position: absolute;
  /*width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;*/
}
nav img {
  float:left;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media only screen and (max-width: 760px) {
  nav.nav-links {
    margin-top: 70px;
    margin-left: -70px;
    display: flex;
  }
  nav.nav-links a {
    text-align: center;
  }
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 100vw;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: end;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
