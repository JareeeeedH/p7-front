<template>
  <div style="padding: 3rem" class="col-md-12">
    <div>
      <div class="alert alert-danger" role="alert" v-show="message">
        {{ message }}
      </div>
      <div class="form-group">
        <label htmlFor="username">Email</label>
        <input v-model="email" type="text" class="form-control" name="email" />
      </div>
      <br />
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          name="password"
        />
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary btn-block" @click="submitLogin">
          <span>Login</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '../api-service.js/auth-service';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    submitLogin() {
      AuthService.login(this.email, this.password)
        .then((response) => {
          //登入成功, 有token, 存入localStorage
          if (response.data.token) {
            //   存入ls, 打出去給外層
            const dataToSave = JSON.stringify(response.data);
            window.localStorage.setItem('user', dataToSave);
            this.$emit('saveUser', response.data);
          }
          alert('login succed and redirect to profile page');
          this.$router.push('/profile');
        })
        .catch((error) => {
          this.message = error.response.data;
          console.log(error.response.data);
        });
    },
  },
};
</script>
