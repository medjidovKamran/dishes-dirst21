<template>
  <div class="row">
  <h2 class="center">Dishes</h2>
    <div v-if="dishes.length" v-for="dish in dishes" :key="dish._id" class="col s12 m4">
    <div class="card large">
    <div class="card-content">
      <div class="card-title">{{ dish.name }}</div>
      <div>{{ dish.description }}</div>
      <br />
      <div class="row">
        <div class="col s6">
          <p>Price: {{ dish.price }}€</p>
          <p>Category: {{ dish.category }}</p>
          <p>Weight: {{ dish.weight }} gr.</p>
        </div>
        <div class="col s6">
          <p>Protein: {{ dish.protein }} gr.</p>
          <p>Energy: {{ dish.energy }} gr.</p>
          <p>Fat: {{ dish.fat }} gr.</p>
        </div>
      </div>
        <p>
          Status: <span v-if="dish.status" class="active">Active</span><span class="deactive" v-else>Deactive</span>
          <p>Sale time: {{ dish.saleStart }} - {{ dish.saleFinish }}</p>
          <p>Waiting time: {{ dish.waitingTime }} min.</p>
        </p>
      </div>
    <div class="card-action">
      <a
        @click="deleteDish(dish._id)"
        class="btn waves-effect red darken-2 waves-light"
      >
        <i class="material-icons">delete_forever</i>
      </a>
      <router-link :to="'/edit/' + dish._id"
        class="btn waves-effect teal lighten-2 waves-light"
      >
        <i class="material-icons">edit</i>
      </router-link>
    </div>
    </div>
    </div>
    <h5 class="center" v-else>Dishes not found yet. <router-link to="/create">Want to add?</router-link></h5>
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
      .then(({ data }) => (this.dishes = data.data))
      .catch(error => console.log(error))
  },
  methods: {
    deleteDish(id) {
      axiosInstance
        .delete(`/dishes/${id}`)
        .then(({ data }) => (this.dishes = data.data))
        .catch(error => console.log(error))
    },
  },
}
</script>

<style lang="scss">
.active {
  color: green;
  font-weight: 700;
}

.deactive {
  color: red;
  font-weight: 700;
}

.card-action a {
  margin: 0 15px 0 0;
}
</style>
