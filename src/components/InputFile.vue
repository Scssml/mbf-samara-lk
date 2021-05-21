<template>
  <div>
    <template v-if="!isDisabled">
      <label>
        <input
          type="file"
          :name="name"
          :placeholder="placeholder"
          :required="required"
          @change="updateInput($event.target.files)"
          multiple
        />

        <span>Выберите файл</span>

        <div>
          {{ placeholder }}

          <div>
            <template v-if="fileNameStr">
              {{ fileNameStr }}
            </template>

            <template v-else>
              Файлы не выбраны
            </template>
          </div>
        </div>
      </label>
    </template>

    <template v-else>
      <div>{{ placeholder }}</div>
    </template>

    <template v-if="fileSrc.length > 0">
      <div class="file-list">
        <template v-for="(item, index) in fileSrc">
          <a
            :key="index"
            :href="item"
          >Файл {{ index + 1 }}</a>

          <template v-if="index + 1 !== fileSrc.length">
            ,
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'InputFile',
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
    fileSrc: {
      type: Array,
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
  data() {
    return {
      files: [],
    };
  },
  computed: {
    filesName() {
      return Array.from(this.files).map((item) => item.name);
    },
    fileNameStr() {
      return this.filesName.join(', ');
    },
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
      this.files = val;
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  label {
    display: flex;
    align-items: center;
    border: 1px solid #CACACA;
    border-radius: 5px;
    width: 100%;
    height: 52px;
    padding: 5px 15px;
    background: #fff;
    margin: 0;
    outline: none;
    font-size: 16px;
    line-height: 22px;

    input {
      display: none;
    }

    span {
      flex-shrink: 0;
      margin-right: 15px;
      background: #004F99;
      border-radius: 3px;
      color: #fff;
      padding: 5px 10px;
    }

    div {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;

      div {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  .file-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
  }
</style>
