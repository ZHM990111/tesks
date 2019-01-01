<template>
    <div class="accout">
        <div class="top">账号</div>
        <div class="count">
            <div class="person">
                <div class="left">
                    <img src="../img/5.png" alt="">
                    <p>张小米</p>
                </div>
                <div class="right">
                    <p>
                        <i class="iconfont icon-shipin"></i>签到
                    </p>
                </div>
            </div>
            <div class="tab">
                <p>
                    <span>动态</span>
                    <span>1</span>
                </p>
                <p>
                    <span>关注</span>
                    <span>1</span>
                </p>
                <p>
                    <span>粉丝</span>
                    <span>1</span>
                </p>
                <p>
                    <span>
                        <i class="iconfont icon-shipin"></i>
                    </span>
                    <span style="font-weight:100;">我的资料</span>
                </p>
            </div>
            <ul class="list">
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>我的消息</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <router-link :to="{name:'Member'}">
                            <i class="iconfont icon-shipin"></i>
                            <span>会员中心</span>
                        </router-link>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>商城</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>游戏推荐:明日之后</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>在线听歌免流量</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>设置</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>扫一扫</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>个性换肤</span>
                    </p>
                    <p>
                        <span style="font-weight:100;font-size:14px">自选颜色</span>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>夜间模式</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>定时关闭</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon-shipin"></i>
                        <span>音乐闹钟</span>
                    </p>
                    <p>
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Accout"
};
</script>

<style lang='less' scoped>
.accout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    line-height: 44px;
    height: 44px;
    background: #666;
    color: #fff;
    font-size: 18px;
  }
  .count {
    margin-top: 44px;
    flex: 1;
    width: 100%;
    .person {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .right {
        p {
          margin-top: 20px;
          padding: 2px 10px;
          border: 1px solid #666;
          border-radius: 15px;
          .iconfont {
            margin: 0 3px;
          }
        }
      }
      .left {
        img {
          border-radius: 100%;
          width: 70px;
          height: 70px;
          margin-right: 10px;
          vertical-align: middle;
        }
        p {
          display: inline-block;
          font-weight: bold;
        }
      }
    }
    .tab {
      width: 100%;
      display: flex;
      p {
        flex: 1;
        text-align: center;
        :first-child {
          color: #666;
          font-size: 12px;
        }
        :last-child {
          font-weight: bold;
        }
        .iconfont {
          font-size: 12px;
        }
        span {
          display: block;
        }
      }
    }
    .list {
      width: 100%;
      li {
        width: 100%;
        height: 50px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        span {
          font-size: 16px;
          font-weight: 550;
          color: rgb(58, 56, 56);
          margin-left: 10px;
        }
        .iconfont {
          font-size: 20px;
          color: #666;
        }
      }
      li:first-child {
        border-bottom: 10px solid #eee;
        border-top: 10px solid #eee;
      }
      li:nth-child(5) {
        border-bottom: 10px solid #eee;
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>
