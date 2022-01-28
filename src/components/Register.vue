<template>
  <div style="padding: 3rem" class="col-md-12">
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input v-model="name" type="text" class="form-control" name="name" />
      </div>
      <br />
      <div class="form-group">
        <label htmlFor="email">email</label>
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
        <label htmlFor="role">role</label>
        <input v-model="role" type="text" class="form-control" name="role" />
      </div>
      <br />
      <button class="btn btn-primary">
        <span @click="submitRegister">Register</span>
      </button>
    </div>
  </div>
</template>

<script>
import AuthService from '../api-service.js/auth-service';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      password: '',
      email: '',
      role: '',
      message: '',
    };
  },
  props: {
    admin: {
      type: String,
      default: '',
    },
  },
  methods: {
    submitRegister() {
      AuthService.register(this.name, this.email, this.password, this.role)
        .then((response) => {
          console.log(response);
          alert('success, you will redirect to login page');
          this.$router.push('/login');
        })
        .catch((err) => {
          console.log(err.response);
          this.message = err.response.data;
        });
    },
  },
};
</script>
