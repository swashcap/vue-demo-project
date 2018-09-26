<template>
  <div id="app">
    <Header />
    <main>
      <transition name="fade">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#app main {
  flex-grow: 2;
  margin: .5em 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>