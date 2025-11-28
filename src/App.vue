<template>
  <div>
    <!--<ContadorView/>-->
    <DirectivasView/>
  </div>
</template>

<script>
import ContadorView from './view/ContadorView.vue';
import DirectivasView from './view/DirectivasView.vue';

export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView
  }
}
</script>

<style>

</style>
