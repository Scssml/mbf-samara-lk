<template>
  <div class="tabs">
    <template v-for="(item, index) in list">
      <a
        href="#"
        class="tabs__link"
        :class="(item === value) ? 'tabs__link--active' : ''"
        :key="index"
        @click.prevent="click(item)"
      >{{ item }}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    click(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .tabs {
    display: inline-flex;
    overflow: auto;
    background: #004F99;
    border-radius: 5px;

    &__link {
      height: 66px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-shrink: 0;
      padding: 5px 15px;
      border-right: 2px solid #fff;
      color: #fff;
      font-size: 17px;
      line-height: 22px;
      transition: background-color .25s ease-in-out;

      &--active {
        background: #FF8C19;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
</style>
