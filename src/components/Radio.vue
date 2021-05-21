<template>
  <div>
    {{ placeholder }}

    <template v-for="(item, index) in list">
      <label :key="index">
        <input
          type="radio"
          :name="name"
          :required="required"
          :value="item"
          :checked="value === item"
          :disabled="isDisabled"
          @input="updateInput(item)"
        />

        <span>{{ item }}</span>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: true,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
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
    updateInput(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    font-size: 16px;
    line-height: 22px;

    label {
      display: block;
      margin-top: 15px;
      margin-bottom: 0;

      input {
        display: none;

        &:checked + span:before {
          background-color: #004F99;
        }
      }

      span {
        display: flex;
        align-items: flex-start;

        &:before {
          content: '';
          width: 21px;
          height: 21px;
          background-color: #FFF;
          background-position: center;
          background-repeat: no-repeat;
          border: 4.5px solid #fff;
          box-shadow: 0 0 0 1px #CACACA;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
        }
      }
    }
  }
</style>
