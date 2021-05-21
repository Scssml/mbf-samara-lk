<template>
  <label>
    <input
      type="checkbox"
      :name="name"
      :required="required"
      :checked="value"
      :disabled="isDisabled"
      @input="updateInput($event.target.checked)"
    />

    <span>{{ placeholder }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
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
      type: Boolean,
      default: false,
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
  label {

    input {
      display: none;

      &:checked + span:before {
        background-image:url(~@/assets/img/success.svg);
      }
    }

    span {
      display: flex;
      align-items: flex-start;

      &:before {
        content: '';
        width: 22px;
        height: 22px;
        background-color: #FFF;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid #CACACA;
        border-radius: 3px;
        margin-right: 10px;
        flex-shrink: 0;
      }
    }
  }
</style>
