<template>
  <div class="home">
    <homepage></homepage>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import homepage from '@/components/homepage.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    homepage
  }
}
</script>
