<template>
  <nav>
    <template v-for="(item, index) in list">
      <router-link
        :to="item.to"
        :key="index"
      >{{ item.name }}</router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  nav {
    width: 234px;
    background: rgba(0, 51, 153, 0.7);
    color: #fff;
    font-size: 20px;
    line-height: 27px;

    a {
      display: flex;
      padding: 5px 30px;
      height: 64px;
      align-items: center;
      color: #fff;
      transition: background-color .25s ease-in-out;

      &.router-link-exact-active {
        background: #FF8C19;
      }
    }
  }
</style>
