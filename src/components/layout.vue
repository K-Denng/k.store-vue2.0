<template>
  <div>
    <div class="app-header">
      <div class="w">
        <div class="logo">K.Store</div>
        <ul>
          <li class="login">
            <a href="" title="">登陆</a></li>
          <li class="register">
            <a href="" title="">注册</a></li>
          <li class="about">
            <a href="" title="">关于我们</a></li>
        </ul>
      </div>
    </div>

    <div class="app-content">
      <keep-alive>
        <router-view></router-view> 
      </keep-alive>

    </div>

    <div class="app-footer">
      <div class="links">
      <a href="https://www.jianshu.com" class="link" target="_blank">简书</a>
      <a href="https://juejin.im" class="link" target="_blank">掘金</a>
      <a href="https://github.com" class="link" target="_blank">Github</a>
      <a href="https://www.douban.com" class="link" target="_blank">豆瓣</a>
      <a href="https://www.zhihu.com" class="link" target="_blank">知乎</a>
    </div>
    <div class="copyright">Copyright &copy; 2017 all rights reserved K_Denng</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 没有scoped属性，使得css重置对全局都有影响 -->
<style lang='less'>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-header{
  height: 80px;
  line-height: 80px;
  background-color: #1d0704;
  .w {
    width: 1000px;
    margin: 0 auto;
    .logo {
      font-size: 48px;
      font-weight: 700;
      color: #3378d0;
      float: left;
    }
    ul {
      float: right;
      li {
        float: left;
        padding:0px 10px;
        a {
          color: #666;
          &:hover {
            color: #ccc;
          }
        }
      }
    }
  }
}
.app-footer {
  width: 100%;
  padding: 10px;
  background-color: #eee;
  .links {
    text-align: center;
    margin: 20px auto 10px;
    color: #666;
    .link {
      display: inline-block;
      margin:0px 10px;
    }
  }
  .copyright {
    margin:5px auto;
    text-align: center;
    color: #666;
  }
}
</style>
