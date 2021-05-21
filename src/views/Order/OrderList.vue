<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-6">
        <h1>{{ title }}</h1>
      </div>

      <div class="col-lg-6 text-right" v-if="isUser">
        <BtnLink
          to="/order/add/"
          text="Подать заявку"
        />
      </div>
    </div>

    <div class="row">
      <template v-for="(item, index) in list">
        <div class="col-lg-6" :key="index">
          <OrderItem
            :id="item.id"
            :status="item.status"
            :date="item.date"
            :epyAddress="item.epyAddress"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BtnLink from '@/components/BtnLink.vue';
import OrderItem from '@/components/OrderItem.vue';

export default {
  name: 'OrderList',
  components: {
    BtnLink,
    OrderItem,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          status: 'зарегистрирована',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 2,
          status: 'на рассмотрении',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 3,
          status: 'рассмотрение приостановлено',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 4,
          status: 'аннулирована',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 5,
          status: 'принята',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 6,
          status: 'выполнена',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
        {
          id: 7,
          status: 'на рассмотрении',
          date: '17.05.2021',
          epyAddress: 'г. Самара',
        },
      ],
    };
  },
  computed: {
    title() {
      return (this.isUser) ? 'Мои заявки' : 'Заявки';
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
