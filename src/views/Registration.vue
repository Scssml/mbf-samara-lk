<template>
  <div>
    <h1>Регистрация</h1>
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from '@/components/Registration.vue';

export default {
  name: 'Registration',
  components: {
    RegistrationForm,
  },
};
</script>
