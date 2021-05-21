<template>
  <div>
    <UserInfo
      :name="userName"
    />

    <div class="row mb-4">
      <div class="col-lg-4">
        <Select
          v-model="typeSelect"
          :options="typeList"
          @input="resetSectionSelect()"
        />
      </div>
    </div>

    <Tabs
      :list="sectionList"
      v-model="sectionSelect"
      class="mb-4"
    />

    <template v-if="typeSelect && sectionSelect">
      <Form
        :items="fieldsList"
        @success="changeSection()"
      />
    </template>
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import Select from '@/components/Select.vue';
import Tabs from '@/components/Tabs.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Personal',
  components: {
    UserInfo,
    Select,
    Tabs,
    Form,
  },
  data() {
    return {
      typeSelect: '',
      sectionSelect: 'Общие',
      dataList: [
        {
          type: 'Физическое лицо',
          sections: [
            {
              name: 'Общие',
              fields: [
                {
                  name: 'email',
                  placeholder: 'Адрес электронной почты',
                  required: true,
                  type: 'email',
                  value: '',
                  mask: '',
                },
                {
                  name: 'phone',
                  placeholder: 'Телефон',
                  required: true,
                  type: 'tel',
                  value: '',
                  mask: '+7 (999) 999-99-99',
                },
                {
                  name: 'password',
                  placeholder: 'Пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'passwordConfirm',
                  placeholder: 'Подтвердите пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'surname',
                  placeholder: 'Фамилия',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'name',
                  placeholder: 'Имя',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'middleName',
                  placeholder: 'Отчество',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'region',
                  placeholder: 'Домашний регион',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'snils',
                  placeholder: 'СНИЛС',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'emailNotifications',
                  placeholder: 'Получать email уведомления',
                  required: false,
                  type: 'checkbox',
                  value: false,
                  mask: '',
                },
                {
                  name: 'userAgreement',
                  placeholder: 'Я принимаю условия пользовательского соглашения',
                  required: true,
                  type: 'checkbox',
                  value: true,
                  mask: '',
                },
              ],
            },
            {
              name: 'Документ удостоверяющий личность',
              fields: [
                {
                  name: 'passport',
                  placeholder: 'Паспорт',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'series',
                  placeholder: 'Серия',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'number',
                  placeholder: 'Номер',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'issued',
                  placeholder: 'Выдан',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'dateIssue',
                  placeholder: 'Дата выдачи',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'passportFile',
                  placeholder: 'Сканированная копия документа',
                  required: false,
                  type: 'file',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Адрес места регистрации',
              fields: [
                {
                  name: 'address',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Адрес места жительства',
              fields: [
                {
                  name: 'actualAddress',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
          ],
        },
        {
          type: 'Юридическое лицо',
          sections: [
            {
              name: 'Общие',
              fields: [
                {
                  name: 'email',
                  placeholder: 'Адрес электронной почты',
                  required: true,
                  type: 'email',
                  value: '',
                  mask: '',
                },
                {
                  name: 'phone',
                  placeholder: 'Телефон',
                  required: true,
                  type: 'tel',
                  value: '',
                  mask: '+7 (999) 999-99-99',
                },
                {
                  name: 'password',
                  placeholder: 'Пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'passwordConfirm',
                  placeholder: 'Подтвердите пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'surname',
                  placeholder: 'Фамилия руководителя',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'name',
                  placeholder: 'Имя руководителя',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'middleName',
                  placeholder: 'Отчество руководителя',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'emailNotifications',
                  placeholder: 'Получать email уведомления',
                  required: false,
                  type: 'checkbox',
                  value: false,
                  mask: '',
                },
                {
                  name: 'userAgreement',
                  placeholder: 'Я принимаю условия пользовательского соглашения',
                  required: true,
                  type: 'checkbox',
                  value: true,
                  mask: '',
                },
              ],
            },
            {
              name: 'Юридический адрес',
              fields: [
                {
                  name: 'address',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Фактический адрес',
              fields: [
                {
                  name: 'actualAddress',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Почтовый адрес',
              fields: [
                {
                  name: 'postalAddress',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Сведения об организации',
              fields: [
                {
                  name: 'legalForm',
                  placeholder: 'Организационно-правовая форма',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'headPost',
                  placeholder: 'Должность руководителя',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'inn',
                  placeholder: 'ИНН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'kpp',
                  placeholder: 'КПП',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'ogrn',
                  placeholder: 'ОГРН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'dataOgrn',
                  placeholder: 'Дата ОГРН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Платежные реквизиты',
              fields: [
                {
                  name: 'bik',
                  placeholder: 'Бик',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'bankName',
                  placeholder: 'Наименование банка',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'paymentAccount',
                  placeholder: 'Расчетный счет',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'correspondentAccount',
                  placeholder: 'Корреспондентский счет',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
          ],
        },
        {
          type: 'Индивидуальный предприниматель',
          sections: [
            {
              name: 'Общие',
              fields: [
                {
                  name: 'email',
                  placeholder: 'Адрес электронной почты',
                  required: true,
                  type: 'email',
                  value: '',
                  mask: '',
                },
                {
                  name: 'phone',
                  placeholder: 'Телефон',
                  required: true,
                  type: 'tel',
                  value: '',
                  mask: '+7 (999) 999-99-99',
                },
                {
                  name: 'password',
                  placeholder: 'Пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'passwordConfirm',
                  placeholder: 'Подтвердите пароль',
                  required: true,
                  type: 'password',
                  value: '',
                  mask: '',
                },
                {
                  name: 'surname',
                  placeholder: 'Фамилия',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'name',
                  placeholder: 'Имя',
                  required: true,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'middleName',
                  placeholder: 'Отчество',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'region',
                  placeholder: 'Домашний регион',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'inn',
                  placeholder: 'ИНН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'ogrn',
                  placeholder: 'ОГРН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'dataOgrn',
                  placeholder: 'Дата ОГРН',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'emailNotifications',
                  placeholder: 'Получать email уведомления',
                  required: false,
                  type: 'checkbox',
                  value: false,
                  mask: '',
                },
                {
                  name: 'userAgreement',
                  placeholder: 'Я принимаю условия пользовательского соглашения',
                  required: true,
                  type: 'checkbox',
                  value: true,
                  mask: '',
                },
              ],
            },
            {
              name: 'Документ удостоверяющий личность',
              fields: [
                {
                  name: 'passport',
                  placeholder: 'Паспорт',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'series',
                  placeholder: 'Серия',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'number',
                  placeholder: 'Номер',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'issued',
                  placeholder: 'Выдан',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'dateIssue',
                  placeholder: 'Дата выдачи',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
                {
                  name: 'passportFile',
                  placeholder: 'Сканированная копия документа',
                  required: false,
                  type: 'file',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Адрес места регистрации',
              fields: [
                {
                  name: 'address',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Адрес места жительства',
              fields: [
                {
                  name: 'actualAddress',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
            {
              name: 'Почтовый адрес',
              fields: [
                {
                  name: 'postalAddress',
                  placeholder: 'Адрес',
                  required: false,
                  type: 'text',
                  value: '',
                  mask: '',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
    },
    typeList() {
      return this.dataList.map((item) => item.type);
    },
    sectionList() {
      const type = this.dataList.find((item) => item.type === this.typeSelect);
      return type.sections.map((item) => item.name);
    },
    fieldsList() {
      const type = this.dataList.find((item) => item.type === this.typeSelect);
      const section = type.sections.find((item) => item.name === this.sectionSelect);
      return section.fields;
    },
    nextSection() {
      const selectIndex = this.sectionList.findIndex((item) => item === this.sectionSelect);
      return this.sectionList[selectIndex + 1] ? this.sectionList[selectIndex + 1] : false;
    },
  },
  methods: {
    getUserInfo() {
      this.typeSelect = 'Физическое лицо';
    },
    resetSectionSelect() {
      this.sectionSelect = 'Общие';
    },
    changeSection() {
      if (this.nextSection) {
        this.sectionSelect = this.nextSection;
      }
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>
