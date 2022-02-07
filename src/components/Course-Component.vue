<template>
  <div class="wrapper">
    <!-- 沒有登入的狀態 -->
    <div class="un-login" v-if="Object.keys(userData).length == 0">
      <h2>you have to login first!</h2>
      <button class="btn btn-primary" @click="toLogin">
        Take me to login Page
      </button>
    </div>
    <!-- 有登入的狀態, instructor/ student -->
    <div class="login-display" v-else>
      <div
        class="instructor-page"
        v-if="userData.foundUser.role == 'instructor'"
      >
        <h1>welcome to instructor page</h1>
      </div>
      <div class="student-page" v-if="userData.foundUser.role == 'student'">
        <h1>welcome to student page</h1>
      </div>
    </div>
    <!-- 課程清單 -->
    <hr>
    <div class="courses-wrapper">
      <ul class="course" v-for='item in foundCourses' :key='item._id'>
        <li>
          {{item.title}} | {{item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import courseService from '../api-service.js/course-service'
export default {
  props: ['userData'],
  data(){
    return{
      foundCourses:[]
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/login');
    },
  },

  created() {
    // 若有登入狀態,有user
    // instructorId Call Api,取得該講師的課程
    courseService.get(this.userData.foundUser._id).then(response=> this.foundCourses = response.data)
  },
};
</script>

<style scoped>
.wrapper {
  padding: 3rem;
}
</style>
