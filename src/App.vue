<template>
  <div id="app">
    <div class="block">
      <div class="block__left">
        <Menu :list="menuList" />
      </div>

      <div class="block__right">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
  data() {
    return {
      menuMain: [
        {
          grpup: 'user',
          list: [
            {
              name: 'Профиль',
              to: '/personal/',
            },
            {
              name: 'Подать заявку',
              to: '/order/add/',
            },
            {
              name: 'Мои заявки',
              to: '/order/',
            },
            {
              name: 'Мои обращения',
              to: '/message/',
            },
          ],
        },
        {
          grpup: 'manager',
          list: [
            {
              name: 'Заявки',
              to: '/order/',
            },
            {
              name: 'Обращения',
              to: '/message/',
            },
          ],
        },
        {
          grpup: 'provider',
          list: [
            {
              name: 'Заявки',
              to: '/order/',
            },
          ],
        },
      ],
    };
  },
  computed: {
    menuList() {
      const findItem = this.menuMain.find((item) => item.grpup === this.group);
      return (findItem) ? findItem.list : [];
    },
    group() {
      return this.$store.getters.getUserGroup;
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    // min-height: calc(100vh - 172px - 75px);
    min-height: 100vh;
    background-image: url(~@/assets/img/bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

    &__left {
      flex-shrink: 0;
    }

    &__right {
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
      padding: 40px 70px;
    }
  }
</style>

<style lang="scss">
  .mb-4 {
    margin-bottom: 30px;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .w-100 {
    width: 100%;
  }

  #app {

    .row {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
