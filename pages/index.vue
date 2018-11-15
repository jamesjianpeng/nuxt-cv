<template>
  <section class="container">
    <!-- <div>
      <logo/>
      <h1 class="title">
        James <a href="https://www.pengjiandry.com">彭涧的博客</a>
      </h1>
    </div> -->
    <cv />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Cv from '~/components/cv'
export default {
  components: {
    Logo,
    Cv
  }
}
</script>

<style>

/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
