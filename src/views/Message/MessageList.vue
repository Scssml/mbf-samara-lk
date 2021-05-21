<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-6">
        <h1>{{ title }}</h1>
      </div>

      <div class="col-lg-6 text-right" v-if="isUser">
        <BtnLink
          to="/message/add/"
          text="Подать заявку"
        />
      </div>
    </div>

    <div class="row">
      <template v-for="(item, index) in list">
        <div class="col-lg-6" :key="index">
          <MessageItem
            :id="item.id"
            :status="item.status"
            :date="item.date"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BtnLink from '@/components/BtnLink.vue';
import MessageItem from '@/components/MessageItem.vue';

export default {
  name: 'OrderList',
  components: {
    BtnLink,
    MessageItem,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          status: 'открытый',
          date: '17.05.2021',
        },
        {
          id: 2,
          status: 'закрытый',
          date: '17.05.2021',
        },
        {
          id: 3,
          status: 'открытый',
          date: '17.05.2021',
        },
        {
          id: 4,
          status: 'закрытый',
          date: '17.05.2021',
        },
        {
          id: 5,
          status: 'открытый',
          date: '17.05.2021',
        },
      ],
    };
  },
  computed: {
    title() {
      return (this.isUser) ? 'Мои обращения' : 'Обращения';
    },
    group() {
      return this.$store.getters.getUserGroup;
    },
    isUser() {
      return this.group === 'user';
    },
  },
};
</script>
