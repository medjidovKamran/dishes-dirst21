<template>
  <div class="row">
    <form @submit.prevent="submitHandler" class="col s6 offset-s3">
      <div class="row">
        <div class="input-field col s4">
          <input v-model="name" required id="name" type="text" class="validate" />
          <label for="name">Name</label>
        </div>
        <div class="input-field col s4">
          <input v-model="price" required id="price" type="number" class="validate" />
          <label for="price">Price</label>
        </div>
        <div class="input-field col s4">
          <input v-model="weight" id="weight" type="number" class="validate" />
          <label for="weight">Weight</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
        </div>
      </div>
      <div class="row">
        <label>Category</label>
        <div class="input-field col s12">
          <select v-model="category">
            <option value="" disabled selected>Choose your option</option>
            <option value="Salad">Salad</option>
            <option value="Bread">Bread</option>
            <option value="Soup">Soup</option>
            <option value="Meat">Meat</option>
            <option value="Pizza">Pizza</option>
            <option value="Drinks">Drinks</option>
            <option value="Cookies">Cookies</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <label for="carbohydrates">Сarbohydrates</label>
          <input v-model="carbohydrates" id="carbohydrates" type="number" />
        </div>
        <div class="input-field col s4">
          <input v-model="energy" id="energy" type="number" />
          <label for="energy">Energy</label>
        </div>
        <div class="input-field col s4">
          <label for="fat">Fat</label>
          <input v-model="fat" id="fat" type="number" />
        </div>
      </div>

      <div class="row">
        <div class="input-field col s4">
          <label>
            <input v-model="soldOut" type="checkbox" />
            <span>Sold out?</span>
          </label>
        </div>
        <div class="input-field col s4">
          <label for="available">Start sale </label>
          <input v-model="saleStart" id="saleStart" class="timepicker" type="time" />
        </div>
        <div class="input-field col s4">
          <label for="available">Finish sale</label>
          <input v-model="saleFinish" id="saleFinish" class="timepicker" type="time" placeholder=" " />
        </div>
        <button class="btn blue darken-2 waves-effect waves-light" type="submit" name="action">Submit</button>
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
}
.input-field input[type='text']:focus + label {
  color: #1776d1;
}

.input-field select:focus + label {
  color: red;
}

.input-field input[type='checkbox']:focus + label {
  color: #1776d1;
}
.input-field input[type='text']:focus {
  border-bottom: 1px solid #1776d1;
}
.input-field input[type='text'].valid {
  border-bottom: 1px solid green;
  box-shadow: 0 1px 0 0 green;
}
.input-field input[type='text'].invalid {
  border-bottom: 1px solid red;
  box-shadow: 0 1px 0 0 red;
}
</style>

<script>
import { axiosInstance } from '../axiosInstance'

export default {
  name: 'create',
  data: () => {},
  methods: {
    submitHandler() {
      const { name, price, weight, description, category, carbohydrates, energy, fat, soldOut, saleStart, saleFinish } =
        this
      const dish = {
        name,
        price,
        weight,
        description,
        category,
        carbohydrates,
        energy,
        fat,
        soldOut,
        saleStart,
        saleFinish,
      }

      axiosInstance
        .put('/dishes', dish)
        .then(response => (this.dishes = response.data))
        .catch(error => console.log(error))
    },
  },
}
</script>
