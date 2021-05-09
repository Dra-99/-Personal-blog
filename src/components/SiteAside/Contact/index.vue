<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{data.mail}}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="popImg">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="popImg">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import Icon from "@/components/Icon";
import "@/styles/global.less";

export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState('setting', ["data"])
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.contact-container {
  margin: 0;
  margin-left: 10px;
  padding: 10px;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    position: relative;
    .popImg {
      position: absolute;
      bottom: 30px;
      margin-bottom: 10px;
      background: #fff;
      padding: 10px;
      border-radius: 13px;
      width: 150px;
      height: 150px;
      left: 0;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        width: 12px;
        height: 12px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -6px;
        transform: rotate(45deg);
      }
    }
    &:hover {
      .popImg {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    color: @gray;
    font-size: 12px;
    .icon {
      font-size: 24px;
      width: 26px;
      margin-right: 10px;
    }
    &:hover{
        color: @primary;
    }
  }
}
</style>