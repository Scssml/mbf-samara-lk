<template>
  <div>
    <h1>Новое обращение</h1>

    <Form
      :items="fieldsList"
    />
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'MessageAdd',
  components: {
    Form,
  },
  data() {
    return {
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
    };
  },
};
</script>
