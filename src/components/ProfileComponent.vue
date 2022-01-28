<template>
  <div class="box">
    <!-- 如果沒資料, {}空物件-->
    <h1 v-if="Object.keys(userData).length == 0">
      you need to login in first !
    </h1>
    <div v-else>
      <h1>{{ userData.foundUser.name }}</h1>
      <h3>{{ userData.foundUser.email }}</h3>
      <hr />
      <h3>token:</h3>
      <h5>{{ userData.token }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  props: {
    userData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  created() {
    // let array = Object.keys(this.userData);
    // let num = Object.keys(this.userData).length;
    // console.log(array.length == num);
  },
};
</script>

<style scoped>
.box {
  padding: 3rem;
}
</style>
