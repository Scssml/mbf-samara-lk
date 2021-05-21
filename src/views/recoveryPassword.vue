<template>
  <div>
    <h1>Восстановление пароля</h1>
    <RecoveryPasswordForm />
  </div>
</template>

<script>
import RecoveryPasswordForm from '@/components/RecoveryPassword.vue';

export default {
  name: 'RecoveryPassword',
  components: {
    RecoveryPasswordForm,
  },
};
</script>
