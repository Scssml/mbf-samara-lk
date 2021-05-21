<template>
  <label>
    <textarea
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :disabled="isDisabled"
      v-mask="mask"
      @input="updateInput($event.target.value)"
    ></textarea>
  </label>
</template>

<script>
export default {
  name: 'Textarea',
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
    mask: {
      type: String,
      default: '',
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
    display: block;

    textarea {
      border: 1px solid #CACACA;
      border-radius: 5px;
      width: 100%;
      height: 100px;
      padding: 5px 15px;
      background: #fff;
      margin: 0;
      outline: none;
      font-size: 16px;
      line-height: 22px;
      resize: vertical;
    }
  }
</style>
