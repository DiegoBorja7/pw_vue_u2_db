<template>
  <div class="app-shell">
    <PokemonView />
  </div>
</template>

<script>
import PokemonView from './view/PokemonView.vue';

export default {
  name: 'App',
  components: {
    PokemonView
  }
}
</script>

<style>
:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}

:global(html, body) {
  height: 100%;
  margin: 0;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
}

:global(body) {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

:global(#app) {
  width: 100%;
}

.app-shell {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
