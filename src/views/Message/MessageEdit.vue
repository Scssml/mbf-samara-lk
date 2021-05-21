<template>
  <div>
    <h1>Обращение №{{ $route.params.id }}</h1>

    <div class="row mb-4">
      <div class="col-lg-3">
        <p class="mb-0">Статус</p>
        <Select
          v-model="status"
          :options="statusList"
          @input="changeStatus()"
        />
      </div>
    </div>

    <Form
      :items="fieldsList"
      class="mb-4"
    />

    <template v-if="list.length > 0">
      <template v-for="(item, index) in list">
        <Message
          :key="index"
          :author="userId"
          :userName="item.userName"
          :userId="item.userId"
          :message="item.message"
          :date="item.date"
        />
      </template>
    </template>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Message from '@/components/Message.vue';
import Select from '@/components/Select.vue';

export default {
  name: 'MessageAdd',
  components: {
    Form,
    Message,
    Select,
  },
  data() {
    return {
      status: 'открытый',
      statusList: [
        'открытый',
        'закрытый',
      ],
      fieldsList: [
        {
          name: 'message',
          placeholder: 'Текст обращения',
          required: true,
          type: 'textarea',
          value: '',
          mask: '',
        },
      ],
      list: [
        {
          userName: 'Менеджер',
          userId: 1,
          message: 'Ответ менеджера',
          date: '20.05.2021 10:33',
        },
        {
          userName: 'Тестов Тест',
          userId: 22,
          message: 'Вопрос клиента',
          date: '19.05.2021 19:12',
        },
        {
          userName: 'Менеджер',
          userId: 1,
          message: 'Ответ менеджера',
          date: '19.05.2021 17:54',
        },
        {
          userName: 'Тестов Тест',
          userId: 22,
          message: 'Вопрос клиента',
          date: '19.05.2021 14:49',
        },
      ],
    };
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    },
  },
  methods: {
    changeStatus() {
      alert('Статус изменен');
    },
  },
};
</script>
