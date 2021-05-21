<template>
  <div class="select">
    <select
      :value="value"
      :disabled="isDisabled"
      @change="change($event.target.value)"
    >
      <template v-for="(item, index) in options">
        <option
          :key="index"
          :value="item"
        >{{ item }}</option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    groups: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    group() {
      return this.$store.getters.getUserGroup;
    },
    isDisabled() {
      return !this.inGroups || this.disabled;
    },
    inGroups() {
      return (this.groups.length === 0 || this.groups.indexOf(this.group) !== -1);
    },
  },
  methods: {
    change(event) {
      const value = (event === '') ? null : event;
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .select {
    position: relative;

    select {
      border: 1px solid #CACACA;
      border-radius: 5px;
      width: 100%;
      height: 52px;
      padding: 5px 50px 5px 15px;
      background: #fff;
      margin: 0;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-size: 16px;
      line-height: 22px;
    }

    &:after {
      content: '';
      position: absolute;
      top: calc(50% - 7px);
      right: 15px;
      width: 20px;
      height: 15px;
      background-image: url(~@/assets/img/arrow_down.svg);
      background-position: center;
      background-repeat: no-repeat;
      pointer-events: none;
    }
  }
</style>
