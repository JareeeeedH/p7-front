<template>
  <div id="app">
    <navComponent :userData="userData" @saveUser="saveHandler"></navComponent>

    <!-- view -->
    <router-view
      :userData="userData"
      @saveUser="saveHandler"
      @onMessage="handler"
    />
  </div>
</template>

<style lang="scss"></style>

<script>
import navComponent from './components/NavComponent.vue';
import AuthService from './api-service.js/auth-service';

export default {
  name: 'home',
  data() {
    return {
      userData: {},
    };
  },

  components: { navComponent },

  methods: {
    handler() {
      console.log('click');
    },
    saveHandler(userData) {
      console.log(userData);
      this.userData = userData;
    },
  },

  created() {
    // 取得使用者資料
    this.userData = AuthService.getCurrentUser() || {};
    // AuthService.logout();
  },
};
</script>
