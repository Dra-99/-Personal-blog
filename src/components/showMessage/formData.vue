<template>
  <!-- 阻止表单默认事件 -->
  <form
    @submit.prevent="handleSubmit"
    class="form-data-container"
    id="form-data-container"
    ref="container"
  >
    <div class="nick-area">
      <div class="nick-name">
        <input
          max="10"
          v-model="formValue.nickname"
          placeholder="输入昵称"
          type="text"
        />
        <span class="tip">{{ formValue.nickname.length }}/10</span>
      </div>
      <div class="arr">{{ err.nickname }}</div>
    </div>
    <div class="comment-area">
      <div class="comment">
        <textarea
          placeholder="输入评论内容..."
          v-model="formValue.comment"
          maxlength="300"
        ></textarea>
        <span class="tip">{{ formValue.comment.length }}/300</span>
      </div>
      <div class="arr">{{ err.comment }}</div>
    </div>
    <div class="btn">
      <button :disabled="isSubmit">
        {{ isSubmit ? "提交中..." : "提交" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formValue: {
        nickname: "",
        comment: "",
      },
      err: {
        nickname: "",
        comment: "",
      },
      isSubmit: false,
    };
  },
  methods: {
    handleSubmit() {
      this.err.nickname = this.formValue.nickname ? "" : "请填写昵称";
      this.err.comment = this.formValue.comment ? "" : "请填写评论";
      if (this.err.nickname || this.err.comment) {
        return;
      }
      this.isSubmit = true;
      this.$emit("submit", this.formValue, (successInfo) => {
        this.$showMessage({
          content: successInfo,
          type: "success",
          container: this.$refs.container,
          duration: 1000,
          callBack: () => {
            this.isSubmit = false;
            this.err.nickname = "";
            this.err.comment = "";
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.nick-name {
  width: 50%;
  position: relative;
  margin-left: 30px;
}
.nick-name input {
  height: 30px;
  line-height: 30px;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 2px;
  font-size: 13px;
  color: @gray;
}
.comment {
  position: relative;
  margin: 10px 30px;
}
textarea,
.nick-name input {
  width: 100%;
  display: block;
  border: 1px dashed @gray;
  outline: none;
  border-radius: 6px;
  &:focus {
    border-color: @primary;
  }
}
textarea {
  height: 150px;
  resize:vertical;
}
.btn {
  margin-left: 30px;
}
.btn button {
  width: 130px;
  height: 40px;
  background: @primary;
  color: #fff;
  border: 8px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  &:disabled {
    background: @gray;
    cursor: not-allowed;
  }
}
.arr {
  margin: 10px 0;
  margin-left: 30px;
  color: @danger;
}
</style>