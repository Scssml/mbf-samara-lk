<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Оставить заявку',
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 190px;
    height: 48px;
    border: none;
    padding: 5px 15px;
    background: #004F99;
    outline: none;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF
  }
</style>
