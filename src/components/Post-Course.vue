<template>
  <div style="padding: 3rem" class="col-md-12">
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <div>
      <div>
        <label>Title</label>
        <input v-model="title" type="text" class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label>description</label>
        <textarea v-model="description" type="text" class="form-control" />
      </div>
      <br />
      <div class="form-group">
        <label>Price</label>
        <input v-model="price" type="number" class="form-control" />
      </div>
      <button class="btn btn-primary">
        <span @click="submitRegister">Register</span>
      </button>
    </div>
  </div>
</template>

<script>
import courseApi from '../api-service.js/course-service';
export default {
  data() {
    return {
      title: '',
      description: '',
      price: '',
      message: '',
    };
  },
  methods: {
    submitRegister() {
      const title = this.title;
      const description = this.description;
      const price = this.price;
      courseApi
        .post(title, description, price)
        .then(() => {
          this.$router.push('/course');
        })
        .catch((error) => {
          this.message = error.response.data;
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
