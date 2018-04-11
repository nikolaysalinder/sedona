<template>
  <div class="hotels">
    <section class="filters">
      <form class="filters-form">
        <section class="filter-options">
          <h2 class="filter-title">Инфраструктура:</h2>
          <label
          for="option1">Бассейн
          <input
          id="option1"
          type="checkbox"
          checked>
          <span class="checkbox-indicator"></span>
        </label>
        <label
        for="option2">Парковка
          <input
          id="option2"
          type="checkbox">
          <span class="checkbox-indicator"></span>
        </label>
        <label
        for="option3">wi-fi
          <input
          id="option3"
          type="checkbox">
          <span class="checkbox-indicator"></span>
        </label>
      </section>
      <section class="filter-types">
        <h2 class="filter-title">Тип жилья:</h2>
        <label
        for="type1">Гостиница
          <input
          id="type1"
          type="checkbox"
          checked>
          <span class="checkbox-indicator"></span>
        </label>
        <label
        for="type2">Мотель
          <input
          id="type2"
          type="checkbox"
          checked>
          <span class="checkbox-indicator"></span>
        </label>
        <label
        for="type3">Апартаменты
          <input
          id="type3"
          type="checkbox"
          checked>
          <span class="checkbox-indicator"></span>
        </label>
      </section>
      <section class="filter-range">
        <h2 class="filter-range-title">Стоимость в сутки (Р):</h2>
        <div class="price-controls">
          <label>от
            <input
            type="text"
            name="min-price"
            class="min-price"
            v-model="options.value[0]">
          </label>
          <label>до
            <input
            type="text"
            name="max-price"
            class="max-price"
            v-model="options.value[1]">
          </label>
        </div>
        <vue-slider
        ref="slider"
        v-model="options.value"
        v-bind="options"></vue-slider>
        <!-- <div class="range-controls">
          <div class="scale">
            <div
            class="bar"
            :style="barStyle"></div>
          </div>
          <div
          class="range-toggle"
          :style="rangeToggleMin"></div>
          <div
          class="range-toggle"
          style="rangeToggleMax"></div>
        </div> -->
        <button
        class="btn-transparent"
        type="submit">Показать</button>
      </section>
    </form>
    </section>
    <section class="results">
      <div class="sort">
        <b>Найдено: 3</b>
        <span>Cортировка:</span>
        <ul class="sorted-by">
          <li>
            <button
            @click="filterBy = 'price'"
            :class="{ 'active' : filterBy === 'price' }"
            >По цене</button>
          </li>
          <li>
            <button
            @click="filterBy = 'type'"
            :class="{ 'active' : filterBy === 'type' }"
            >По типу</button>
          </li>
          <li>
            <button
            @click="filterBy = 'rating'"
            :class="{ 'active' : filterBy === 'rating' }"
            >По рейтингу</button>
          </li>
        </ul>
        <ul class="order">
          <li>
            <button
            @click="filterOrder = 'decrease'"
            class="increase"
            :class="{ 'active' : filterOrder === 'decrease' }"
            >По убыванию</button>
          </li>
          <li>
            <button
            @click="filterOrder = 'increase'"
            class="decrease"
            :class="{ 'active' : filterOrder === 'increase' }"
            >По возрастанию</button>
          </li>
        </ul>
      </div>
      <app-hotels-item
      :filterOrder='filterOrder'
      :filterBy='filterBy'></app-hotels-item>
    </section>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  name: 'Hotels',
  components: {
    vueSlider,
  },
  data() {
    return {
      options: {
        width: '100%',
        show: true,
        value: [2000, 5000],
        min: 0,
        max: 10000,
        disabled: false,
        tooltip: false,
        sliderStyle: {
          width: '4px',
          height: '4px',
          background: '#ababab',
          border: '8px solid #fff',
        },
        processStyle: {
          background: '#82b3d3',
        },
      },
      minPrice: 0,
      maxPrice: 10000,
      currentMinPrice: 1000,
      currentMaxPrice: 4000,
      filterBy: 'price',
      filterOrder: 'decrease',
    };
  },
  computed: {
    toggleMin() {
      return `${(100 * this.minPrice) / this.maxPrice}%`;
    },
    toggleMax() {
      return `${(100 * this.minPrice) / this.maxPrice}%`;
    },
    barStyle() {
      return {
        left: `${(100 * this.minPrice) / this.maxPrice}%`,
        right: `${(100 * this.minPrice) / this.maxPrice}%`,
      };
    },
    rangeToggleMin() {
      return {
        left: `${(100 * this.minPrice) / this.maxPrice}%`,
      };
    },
    rangeToggleMax() {
      return {
        left: `${(100 * this.minPrice) / this.maxPrice}%`,
      };
    },
  },
  methods: {
  },
};
</script>

<style>
.hotels .filters {
  min-height: 217px;
  background-color: #3a7c90;
  color: #fff;
  font-weight: normal;
  display: flex;
  width: 100%;
  background-size: cover;
}
.hotels .filters-form {
  display: flex;
  padding: 1% 6%;
  width: 100%;
}
.filter-options {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 24%;
}
.filter-options label {
  margin-top: 4.4%;
  margin-bottom: 6.4%;
  margin-left: 39px;
  font-size: 0.9em;
  position: relative;
}
input[type="checkbox"]+.checkbox-indicator {
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  background: red;
  top: -4px;
  left: -42px;
  background: url("./../../assets/checkbox-off.png");
  background-repeat: no-repeat;
  background-position: 2px 3px;
}
input[type="checkbox"]:checked+.checkbox-indicator {
  background: url('./../../assets/checkbox-on.png');
  background-repeat: no-repeat;
  background-position: 2px 3px;
}
.filter-options input[type="checkbox"] {
  display: none;
}
.filter-title {
  font-size: 1.03em;
  font-weight: 600;
}
.filter-types {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 24%;
}
.filter-types label {
  margin-top: 4.2%;
  margin-bottom: 6.4%;
  margin-left: 42px;
  font-size: 0.9em;
  position: relative;
}
.filter-types input[type="checkbox"] {
  display: none;
}
.filter-range {
  width: 30%;
  margin-left: 21.9%;
}
.filter-range-title {
  font-size: 1.03em;
  text-align: left;
}
.price-controls {
  position: relative;
  margin-top: -3px;
  height: 31px;
  margin-bottom: 20px;
  border: 2px solid #ffffff;
  border-radius: 2px;
  display: flex;
}
.price-controls::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 22px;
  background: #ffffff;
  transform: translate(-50%, -50%);
}
.price-controls label {
  display: flex;
  width: 50%;
  padding-left: 20.3%;
  font-size: 0.88em;
  line-height: 32px;
  vertical-align: bottom;
  justify-content: space-between;
  cursor: pointer;
}
.price-controls label:nth-of-type(2) {
  padding-left: 14.5%;
}
.price-controls .min-price,
.price-controls .max-price {
  width: 77%;
}
.price-controls input {
  margin: 0;
  color: inherit;
  font: inherit;
  background: none;
  border: none;
}
.range-controls {
  position: relative;
  margin-bottom: 32px;
}
.range-controls .scale {
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
}
.range-controls .bar {
  height: 2px;
  background: #ffffff;
  position: absolute;
}
.range-toggle {
  position: absolute;
  top: -9px;
  width: 4px;
  height: 4px;
  background: #ababab;
  border: 8px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 1px 0 rgba(0, 1, 1, 0.2);
  cursor: pointer;
}
.range-toggle:hover {
  background: #1c4f80;
}
div.vue-slider-dot:hover {
  background: #000;
}
/*.range-toggle-min {
  left: 10%;
}
.range-toggle-max {
  left: 80%;
}*/
.btn-transparent {
  display: block;
  margin-left: 26.3%;
  padding: 3% 9.4%;
  font-size: 0.9em;
  line-height: 14px;
  color: #ffffff;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 2px;
  cursor: pointer;
}
.btn-transparent:hover {
  color: #000000;
  background: #ffffff;
}
.sort {
  display: flex;
  padding-top: 2.3%;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 2.5%;
  align-items: baseline;
  border-bottom: 1px solid #ccc;
}
.sort b {
  font-size: 1.3em;
  white-space: nowrap;
}
.sort span {
  margin-left: 4.3%;
  font-size: 0.75em;
  font-weight: normal;
}
.sort ul,
.sort li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sort ul {
  display: flex;
  width: 73%;
  margin-left: 3%;
}
.sort ul button {
  margin: 0;
  display: block;
  font: inherit;
  color: #cbcbcb;
  font-weight: normal;
  font-size: 0.75em;
  background: none;
  border: none;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: #82b3d3;
}
.sort li {
  margin-right: 2.5%;
}
.sorted-by .active {
  text-decoration: none;
  color: #82b3d3;
}
.sorted-by button:hover {
  color: #82b3d3;
}
.sorted-by button:active {
  color: #282526;
}
ul.order {
  display: flex;
  justify-content: space-between;
  width: 60px;
}
.order .increase,
.order .decrease {
  text-indent: -9999px;
  margin-right: 0;
  width: 20px;
}
.order button {
  display: block;
  font: inherit;
  background: black;
}
</style>

