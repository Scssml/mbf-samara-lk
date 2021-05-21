<template>
  <div>
    <h1>Вход</h1>
    <Auth />
  </div>
</template>

<script>
import Auth from '@/components/Auth.vue';

export default {
  name: 'Home',
  components: {
    Auth,
  },
};
</script>
