<template>
  <div
    class="block"
    :class="(author === userId) ? 'block--right' : ''"
  >
    <div class="block__content">
      <p>{{ message }}</p>

      <span>
        {{ date }}
        <br>{{ userName }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    author: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    display: flex;
    margin-bottom: 15px;

    &--right {
      justify-content: flex-end;
    }

    &__content {
      max-width: 80%;
      background: #FFFFFF;
      border: 1px solid #CACACA;
      border-radius: 5px;
      padding: 5px 10px;

      p {
        margin-bottom: 5px;
      }

      span {
        display: block;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        border-top: 1px solid #ccc;
        padding-top: 5px;
      }
    }
  }
</style>
