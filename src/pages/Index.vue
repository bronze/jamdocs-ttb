<template>
  <Layout :sidebar="false">
    <div class="content">
      <h1 class="text-green-600 font-bold text-3xl mt-8">Hello, world!</h1>
      <h1>Jamdocs - the ultimate static generated documentation theme for the JAM-stack</h1>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/getting-started" text="Introduction" icon="play-icon" />
        <Shortcut link="/theme-configuration" text="Configuration" icon="sliders-icon" />
        <Shortcut link="/theme-configuration#changing-colors" text="Change colors" icon="eye-icon" />
      </nav>
      <GitLink class="git" size="large" />
    </div>
  </Layout>
</template>

<script>
import GitLink from '~/components/GitLink.vue'
import Shortcut from '~/components/Shortcut.vue'

export default {
  components: {
    GitLink,
    Shortcut
  },
  metaInfo: {
    title: 'The ultimate static generated documentation theme for the JAM-stack',
    meta: [
      { key: 'description', name: 'description', content: 'A theme for static site documentation based on Gridsome, ready to deploy to Netlify in one click.' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
