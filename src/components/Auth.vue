<template>
  <form class="form" @submit.prevent="submit">
    <div
      v-if="errorMessage"
      class="form__message form__message--error"
    >
      {{ errorMessage }}
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <Input
          v-model="login"
          name="login"
          type="text"
          placeholder="Ваша электроннная почта"
          :required="true"
          mask=""
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <Input
          v-model="password"
          name="password"
          type="password"
          placeholder="Пароль"
          :required="true"
          mask=""
        />
      </div>
    </div>

    <div class="mb-4">
      <router-link  to="/recovery-password/">Забыли пароль?</router-link>
    </div>

    <div class="row mb-4">
      <div class="col-lg-2">
        <Btn
          text="Войти"
          v-if="!btnLoading"
          class="w-100"
        />
        <Preloader v-if="btnLoading"/>
      </div>

      <div class="col-lg-2">
        <BtnLink
          to="/registration/"
          text="Регистрация"
          class="w-100"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Input from '@/components/Input.vue';
import Btn from '@/components/Btn.vue';
import BtnLink from '@/components/BtnLink.vue';
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'Auth',
  components: {
    Input,
    Btn,
    BtnLink,
    Preloader,
  },
  data() {
    return {
      errorMessage: '',
      login: '',
      password: '',
      btnLoading: false,
    };
  },
  computed: {
    checkForm() {
      return this.login && this.password;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;

        if (this.login === 'manager') {
          this.$store.dispatch('setUserId', 1);
          this.$store.dispatch('setUserName', 'Менеджер');
          this.$store.dispatch('setUserGroup', 'manager');
        } else if (this.login === 'provider') {
          this.$store.dispatch('setUserId', 5);
          this.$store.dispatch('setUserName', 'Поставщик');
          this.$store.dispatch('setUserGroup', 'provider');
        } else {
          this.$store.dispatch('setUserId', 22);
          this.$store.dispatch('setUserName', 'Тестов Тест');
          this.$store.dispatch('setUserGroup', 'user');
        }

        setTimeout(() => {
          this.$router.push('/order/');
        }, 1000);
      } else {
        this.errorMessage = 'Ошибка!';
      }
    },
  },
};
</script>

<style lang="scss">
  .form {

    &__message {
      margin-bottom: 5px;

      &--error {
        color: #EB1338;
      }
    }
  }
</style>
