<template>
  <div class="login">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      status-icon
      @submit.prevent="signIn"
    >
      <el-form-item prop="username">
        <div>
          <span>帳號</span>
        </div>
        <el-input v-model="loginForm.username" placeholder="登入帳號"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div>
          <span>密碼</span>
        </div>
        <el-input type="password" v-model="loginForm.password" placeholder="登入密碼"></el-input>
      </el-form-item>
      <el-button type="warning" @click="submitForm()">登入</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const usernameValid = (rule, value, callback) => {
      if (value.trim().length === 0) {
        return callback(new Error('請輸入帳號'));
      }
      return callback();
    };
    const passwordValid = (rele, value, callback) => {
      if (value.trim().length === 0) {
        return callback(new Error('請輸入密碼'));
      }
      return callback();
    };
    return {
      name: process.env.VUE_APP_API,
      user: {
        username: '',
        password: '',
      },
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{ validator: usernameValid, trigger: 'blur' }],
        password: [{ validator: passwordValid, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm() {
      const vm = this;
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          vm.$message.success({
            showClose: true,
            duration: 2500,
            message: '登入成功',
          });
          this.$router.push('/dashboard');
        }
      });
    },
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.loginForm).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `testToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/dashboard');
        }
      });
    },
  },
};
</script>

.
<style lang="scss"></style>
