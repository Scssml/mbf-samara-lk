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
          v-model="phone"
          name="phone"
          type="text"
          placeholder="Телефон"
          :required="true"
          mask="+7 (999) 999-99-99"
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

    <div class="row mb-4">
      <div class="col-lg-4">
        <Input
          v-model="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          :required="true"
          mask=""
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <Input
          v-model="surname"
          name="surname"
          type="text"
          placeholder="Фамилия"
          :required="true"
          mask=""
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <Input
          v-model="name"
          name="name"
          type="text"
          placeholder="Имя"
          :required="true"
          mask=""
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <Checkbox
          v-model="privacyPolicy"
          name="privacyPolicy"
          placeholder="
            Я прочитал Политику конфиденциальности и согласен на обработку персональных данных
          "
          :required="true"
        />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-2">
        <Btn
          text="Зарегистрироваться"
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
import Checkbox from '@/components/Checkbox.vue';
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'Registration',
  components: {
    Input,
    Btn,
    BtnLink,
    Checkbox,
    Preloader,
  },
  data() {
    return {
      errorMessage: '',
      login: '',
      phone: '',
      password: '',
      confirmPassword: '',
      surname: '',
      name: '',
      privacyPolicy: false,
      btnLoading: false,
    };
  },
  computed: {
    checkForm() {
      return this.login && this.password && this.checkPassword && this.privacyPolicy;
    },
    checkPassword() {
      return this.password === this.confirmPassword;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;

        this.$store.dispatch('setUserId', 22);
        this.$store.dispatch('setUserName', 'Тестов Тест');
        this.$store.dispatch('setUserGroup', 'user');

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
