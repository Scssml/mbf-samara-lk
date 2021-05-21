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
      <div class="col-lg-2">
        <Btn
          text="Отправить"
          v-if="!btnLoading"
          class="w-100"
        />
        <Preloader v-if="btnLoading"/>
      </div>

      <div class="col-lg-2">
        <BtnLink
          to="/"
          text="Авторизоваться"
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
      btnLoading: false,
    };
  },
  computed: {
    checkForm() {
      return this.login;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;

        setTimeout(() => {
          this.$router.push('/');
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
