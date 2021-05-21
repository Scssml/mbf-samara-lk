<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    font-size: 26px;
    line-height: 35px;
    margin-bottom: 28px;
  }
</style>
