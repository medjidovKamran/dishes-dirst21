<template>
  <div class="row">
    <div class="col s4">
      <div class="card">
        <div class="card-content">
          <p class="card-title">Card Title</p>

          <p>
            I am a very simple card. I am good at containing small bits of information. I am convenient because I
            require little markup to use effectively.
          </p>
        </div>
        <div class="card-action">
          <a class="btn waves-effect red darken-2 waves-light" type="submit" name="action">
            <i class="material-icons">delete_forever</i>
          </a>
          <a class="btn waves-effect yellow darken-4 waves-light" type="submit" name="action">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axiosInstance } from '../axiosInstance'
export default {
  name: 'dishes',
  data() {
    return {
      dishes: [],
    }
  },
  mounted() {
    axiosInstance
      .get('/dishes')
      .then(response => (this.dishes = response.data))
      .catch(error => console.log(error))
  },
}
</script>

<style>
.card-action a {
  margin: 0 15px 0 0;
}
</style>
