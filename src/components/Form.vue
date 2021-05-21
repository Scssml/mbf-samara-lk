<template>
  <form class="form" @submit.prevent="submit">
    <div
      v-if="errorMessage"
      class="form__message form__message--error"
    >
      {{ errorMessage }}
    </div>

    <div
      v-if="successMessage"
      class="form__message form__message--success"
    >
      {{ successMessage }}
    </div>

    <div class="row">
      <template v-for="(item, index) in items">
        <div class="col-lg-4 mb-4" :key="index">
          <template v-if="item.type === 'file'">
            <InputFile
              v-model="item.value"
              :name="item.name"
              :placeholder="item.placeholder"
              :required="item.required"
              :fileSrc="item.fileSrc"
              :disabled="item.disabled"
              :groups="item.groups"
            />
          </template>

          <template v-else-if="item.type === 'checkbox'">
            <Checkbox
              v-model="item.value"
              :name="item.name"
              :placeholder="item.placeholder"
              :required="item.required"
              :disabled="item.disabled"
              :groups="item.groups"
            />
          </template>

          <template v-else-if="item.type === 'radio'">
            <Radio
              v-model="item.value"
              :name="item.name"
              :placeholder="item.placeholder"
              :required="item.required"
              :list="item.list"
              :disabled="item.disabled"
              :groups="item.groups"
            />
          </template>

          <template v-else-if="item.type === 'textarea'">
            <Textarea
              v-model="item.value"
              :name="item.name"
              :placeholder="item.placeholder"
              :required="item.required"
              :mask="item.mask"
              :disabled="item.disabled"
              :groups="item.groups"
            />
          </template>

          <template v-else>
            <Input
              v-model="item.value"
              :name="item.name"
              :type="item.type"
              :placeholder="item.placeholder"
              :required="item.required"
              :mask="item.mask"
              :disabled="item.disabled"
              :groups="item.groups"
            />
          </template>
        </div>
      </template>
    </div>

    <div class="row" v-if="!hideBtn">
      <div class="col-lg-2">
        <Btn
          :text="btnName"
          v-if="!btnLoading"
          class="w-100"
        />
        <Preloader v-if="btnLoading"/>
      </div>
    </div>
  </form>
</template>

<script>
// import axios from 'axios';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import InputFile from '@/components/InputFile.vue';
import Btn from '@/components/Btn.vue';
import Checkbox from '@/components/Checkbox.vue';
import Radio from '@/components/Radio.vue';
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'Form',
  components: {
    Input,
    Textarea,
    InputFile,
    Btn,
    Checkbox,
    Radio,
    Preloader,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    btnName: {
      type: String,
      default: 'Отправить',
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fields: [],
      errorMessage: '',
      successMessage: '',
      btnLoading: false,
    };
  },
  watch: {
    items() {
      this.fields = Object.assign([], this.items);
      this.errorMessage = '';
      this.successMessage = '';
      this.btnLoading = false;
    },
  },
  computed: {
    checkForm() {
      const checkFields = this.fields.every((item) => {
        if (item.required && (item.value.length > 0 || item.value)) {
          return true;
        }

        if (!item.required) {
          return true;
        }

        return false;
      });

      return checkFields;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';
      this.successMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;
        // const action = '/ajax/form.php';
        // const props = {};

        // this.fields.forEach((item) => {
        //   props[item.name] = item.value;
        // });

        // axios
        //   .post(action, props)
        //   .then((response) => {
        //     if (response.data.success) {
        //       this.successMessage = response.data.message;

        //       this.$metrika.reachGoal('ORDERFORM');
        //     } else {
        //       this.errorMessage = response.data.message;
        //     }

        //     this.btnLoading = false;
        //   })
        //   .catch(() => {
        //     this.errorMessage = 'Произошла ошибка';
        //     this.btnLoading = false;
        //   });
        this.successMessage = 'Сохранено';
        this.btnLoading = false;

        this.$emit('success', true);
      } else {
        this.errorMessage = 'Заполните обязательные поля';
      }
    },
  },
  created() {
    this.fields = Object.assign([], this.items);
  },
};
</script>

<style lang="scss">
  .form {

    &__btn {
      width: 100%;
      max-width: 352px;
    }

    &__message {
      margin-bottom: 5px;

      &--error {
        color: #EB1338;
      }

      &--success {
        color: #16a600;
      }

    }
  }
</style>
