<template>
  <div>
    <nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" to="/"> Home </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register">
                  Register
                </router-link>
              </li>

              <li class="nav-item" v-if="isLogin">
                <a class="nav-link" @click="logOut"> Logout </a>
              </li>
              <li class="nav-item" v-else>
                <router-link class="nav-link" to="/login"> Login </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/profile">
                  Profile
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  </div>
</template>

<script>
import AuthService from '../api-service.js/auth-service';

export default {
  props: {
    userData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    logOut() {
      alert('logOut');
      AuthService.logout();
      this.$emit('saveUser', {});
      this.$router.push('/');
    },
  },
  computed: {
    isLogin() {
      return Object.keys(this.userData).length !== 0;
    },
  },
};
</script>
