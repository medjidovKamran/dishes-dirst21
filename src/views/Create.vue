<template>
  <div class="row">
    <h2 class="center">Create Dish</h2>
    <form @submit.prevent="submitHandler" class="col s12">
      <div class="row">
        <div class="col s12 m3">
          <label for="name">Name</label>
          <input v-model="dish.name" maxlength="50" required id="name" type="text" class="validate" />
        </div>
        <div class="col s12 m3">
          <label for="price">Price</label>
          <input v-model="dish.price" required id="price" step="any" type="number" class="validate" />
        </div>
        <div class="col s12 m3">
          <label for="description">Description</label>
          <textarea maxlength="100" v-model="dish.description" id="description" class="materialize-textarea"></textarea>
        </div>
        <div class="col s12 m3">
          <label for="weight">Weight</label>
          <input v-model="dish.weight" id="weight" step="any" type="number" class="validate" />
        </div>
      </div>
      <div class="row">
        <div class="col s12 m4">
          <label for="category">Category</label>
          <select v-model="dish.category">
            <option value="" disabled selected>Choose your category</option>
            <option value="Salad">Salad</option>
            <option value="Bread">Bread</option>
            <option value="Soup">Soup</option>
            <option value="Meat">Meat</option>
            <option value="Pizza">Pizza</option>
            <option value="Drinks">Drinks</option>
            <option value="Cookies">Cookies</option>
          </select>
        </div>
        <div class="col s12 m4">
          <label for="available">Start sale </label>
          <input v-model="dish.saleStart" id="saleStart" class="timepicker" type="time" />
        </div>
        <div class="col s12 m4">
          <label for="available">Finish sale</label>
          <input v-model="dish.saleFinish" id="saleFinish" class="timepicker" type="time" placeholder=" " />
        </div>
      </div>
      <div class="row">
        <div class="col s12 m3">
          <label for="protein">Protein</label>
          <input v-model="dish.protein" id="protein" step="any" type="number" />
        </div>
        <div class="col s12 m3">
          <label for="energy">Energy</label>
          <input v-model="dish.energy" id="energy" step="any" type="number" />
        </div>
        <div class="col s12 m3">
          <label for="fat">Fat</label>
          <input v-model="dish.fat" id="fat" step="any" type="number" />
        </div>
        <div class="col s12 m3">
          <label for="waiting">Waiting</label>
          <input v-model="dish.waitingTime" id="fat" type="number" />
        </div>
      </div>

      <div class="row">
        <div class="col s12 m2">
          <label for="status">Status</label>
          <p>
            <label>
              <input v-model="dish.status" name="status" v-bind:value="true" type="radio" checked />
              <span>Active</span>
            </label>
          </p>
          <p>
            <label>
              <input v-model="dish.status" name="status" v-bind:value="false" type="radio" />
              <span>Deactive</span>
            </label>
          </p>
        </div>

        <button class="btn teal lighten-2 waves-effect waves-light" type="submit" name="action">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
select {
  display: unset;
}
.btn {
  width: 100%;
  font-size: 18px;
}
</style>

<script>
import { axiosInstance } from '../axiosInstance'

export default {
  name: 'create',
  data: () => ({
    dish: {},
  }),
  methods: {
    submitHandler() {
      const {
        name,
        price,
        weight = 0,
        description = 0,
        category,
        protein = 0,
        energy = 0,
        fat = 0,
        status = true,
        saleStart = 0,
        waitingTime = 0,
        saleFinish = '',
      } = this
      const dish = {
        name,
        price,
        weight,
        description,
        protein,
        energy,
        fat,
        waitingTime,
        category,
        status,
        saleStart,
        saleFinish,
      }
      axiosInstance
        .put('/dishes', dish)
        .then(response => {
          this.$router.push('/')
        })
        .catch(error => console.log(error))
    },
    mounted() {},
  },
}
</script>
