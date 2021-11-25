<template>

    <div class="wave one"></div>
    <div class="wave two "></div>
    <div class="wave three"></div>
    <div class="content">
      <!-- bg effect -->
      <div id="bg">
        <canvas></canvas>
        <canvas></canvas>
        <canvas></canvas>
      </div>
      <!-- //bg effect -->

      <!-- title -->
      <h1 v-if="pagename === 'login-page'" class="fs-1">登入頁面</h1>
      <h1 v-if="pagename === 'register-page'" class="fs-1">註冊頁面</h1>
      <!-- //title -->

      <!-- 登入頁面 -->
      <div class="sub-main-w3" v-if="pagename === 'login-page'">
        <form action="#" method="post" class="position-relative">
          <a :href="index" class="fs-5 text-white position-absolute top-0 end-0 mt-3"
            >回大廳
            <i class="fas fa-chevron-right text-deepRed"></i>
          </a>
          <h2 class="fs-3">
            現在登入
            <i class="fas fa-level-down-alt"></i>
          </h2>
          <div class="form-style-agile">
            <label>
              <i class="fas fa-user"></i>
              <span class="fs-5">帳號</span>
            </label>
            <input placeholder="請輸入帳號" name="Name" type="text" required="" />
          </div>
          <div class="form-style-agile">
            <label>
              <i class="fas fa-unlock-alt"></i>
              <span class="fs-5">密碼</span>
            </label>
            <input placeholder="請輸入密碼" name="Password" type="password" required="" />
          </div>
          <!-- checkbox -->
          <div class="wthree-text">
            <ul>
              <li>
                <label class="anim">
                  <input type="checkbox" class="checkbox" required="" />
                  <span>保持登入</span>
                </label>
              </li>
              <li>
                <a href="#">忘記密碼 ?</a>
              </li>
            </ul>
          </div>
          <!-- //checkbox -->
          <a href="#">
            <button type="button" class="btn btn-deepRed btn-lg px-5 rounded-pill">登入</button>
          </a>
          <button
            type="button"
            class="btn btn-deepRed btn-lg px-5 rounded-pill ms-5"
            @click="pagename = 'register-page'"
          >
            註冊
          </button>
        </form>
      </div>

      <!-- //登入頁面 -->

      <!-- 註冊頁面 -->

      <div class="sub-main-w3" v-if="pagename === 'register-page'">
        <v-form
          action="#"
          method="post"
          v-slot="{ errors }"
          @submit="onSubmit"
          class="position-relative pb-4"
        >
          <a :href="index" class="fs-5 text-white position-absolute top-0 end-0 mt-3"
            >回大廳
            <i class="fas fa-chevron-right text-deepRed"></i>
          </a>
          <h2 class="fs-3">
            現在註冊
            <i class="fas fa-level-down-alt"></i>
          </h2>
          <div class="form-style-agile mb-0">
            <label>
              <i class="fas fa-user"></i>
              <span class="fs-5">新帳號</span>
            </label>
            <v-field
              placeholder="請輸入帳號"
              name="帳號"
              type="email"
              required=""
              v-model="loginForm.account"
              rules="alpha_num|required"
              id="account"
              :class="{ 'is-invalid': errors['帳號'] }"
              class="form-control py-3"
              style="border-radius: 20px"
            ></v-field>
            <error-message name="帳號" class="invalid-feedback"></error-message>
          </div>
          <div class="form-style-agile mb-0">
            <label>
              <i class="fas fa-unlock-alt"></i>
              <span class="fs-5">新密碼</span>
            </label>
            <v-field
              placeholder="請輸入密碼"
              name="密碼"
              type="password"
              required=""
              v-model="loginForm.pwd"
              rules="min:6|required"
              id="password"
              :class="{ 'is-invalid': errors['密碼'] }"
              class="form-control py-3"
              style="border-radius: 20px"
            ></v-field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <div class="form-style-agile mb-0">
            <label>
              <i class="fas fa-address-book"></i>
              <span class="fs-5">姓名</span>
            </label>
            <v-field
              placeholder="請輸入姓名"
              name="姓名"
              type="email"
              required=""
              v-model="loginForm.name"
              rules="max:10|required"
              id="Name"
              :class="{ 'is-invalid': errors['姓名'] }"
              class="form-control py-3"
              style="border-radius: 20px"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="form-style-agile">
            <label>
              <i class="fas fa-envelope"></i>
              <span class="fs-5">信箱</span>
            </label>
            <v-field
              placeholder="請輸入信箱"
              name="email"
              type="email"
              required=""
              v-model="loginForm.email"
              rules="email|required"
              id="email"
              :class="{ 'is-invalid': errors['email'] }"
              class="form-control py-3"
              style="border-radius: 20px"
            ></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <!-- checkbox -->
          <div class="wthree-text">
            <ul>
              <li>
                <a href="#" @click="pagename = 'login-page'" class="fs-5">登入</a>
              </li>
            </ul>
          </div>
          <!-- //checkbox -->

          <button class="btn btn-deepRed btn-lg px-5 rounded-pill" type="submit">註冊</button>
        </v-form>
      </div>
      <!-- //註冊頁面 -->
    </div>

</template>

<style>
#app{
  transform: translate3d(0, 0, 0);
  position: relative;
}
.wave {
  background: #26926e;
  width: 400px;
  height:400px;
  border-radius: 40%;
  opacity: 0.4;
  margin-left: -250px;
  margin-top: -250px;
  position:absolute;
  top: 50%;
  left:50%;
  transform-origin: center;
  animation: drift 7s infinite linear;
}
.wave.two {
  animation: drift 9s infinite linear;
}
.wave.three {
  animation: drift 11s infinite linear;
  opacity: 0.1;
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      apiUrl: 'http://192.168.1.104:4000',
      index: 'https://wafflefrank.github.io/RollDice-Lobby/',
      pagename: 'login-page',
      loginForm: {
        account: '',
        pwd: '',
        name: '',
        email: '',
      },
      userErrMsg: '',
      usernameError: false,
      emailError: false,
      accountError: false,
      pwdError: false,
    };
  },
};
</script>

<style lang="scss"></style>
