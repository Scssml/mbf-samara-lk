<template>
  <div class="block">
    <div class="row">
      <div class="col-lg-6">
        <p>
          Номер заявки: {{ id }}
          <br>Дата создания заявки: {{ date }}
        </p>
      </div>

      <div class="col-lg-6 text-right">
        <p>Статус заявки: {{ status }}</p>
      </div>
    </div>

    <p class="text-right mb-0">
      <BtnLink
        :to="link"
        text="Подробно"
      />
    </p>
  </div>
</template>

<script>
import BtnLink from '@/components/BtnLink.vue';

export default {
  name: 'MessageItem',
  components: {
    BtnLink,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    link() {
      return `/message/${this.id}/edit`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    border: 1px solid #CACACA;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 30px;
  }
</style>
