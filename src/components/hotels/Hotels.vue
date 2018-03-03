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
            value="0">
          </label>
          <label>до
            <input
            type="text"
            name="max-price"
            class="max-price"
            value="3000">
          </label>
        </div>
        <div class="range-controls">
          <div class="scale">
            <div class="bar"></div>
          </div>
          <div class="range-toggle range-toggle-min"></div>
          <div class="range-toggle range-toggle-max"></div>
        </div>
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
        <ul>
          <li>
            <button>По цене</button>
          </li>
          <li>
            <button>По типу</button>
          </li>
          <li>
            <button>По рейтингу</button>
          </li>
          <li>
            <button>По убыванию</button>
          </li>
          <li>
            <button class="active">По возрастанию</button>
          </li>
        </ul>
      </div>
      <app-hotels-item></app-hotels-item>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hotels',
  data() {
    return {
    };
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
  margin-left: 21.9%
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
  width: 77%
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
}

.range-controls .bar {
  width: 80%;
  height: 2px;

  background: #ffffff;
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

.range-toggle-min {
  left: 0;
}

.range-toggle-max {
  left: 80%;
}

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
  padding-bottom: 2.5%;
  align-items: baseline;
  border-bottom: 1px solid #ccc;
}
.sort b {
  font-size: 1.3em;
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
.sort li:nth-of-type(4){
  margin-left: 57.7%;
  margin-right: 1.06%;
  font-size: 0;
  display: block;
  width: 15px;
}
.sort li:nth-of-type(4) button {
  height: 100%;
  width: 100%;
  position: relative;
}
 .sort li:nth-of-type(4) button::after {
  content: '';
  position: absolute;
  left: -19%;
  top: -20%;
  width: 0;
  height: 0;
  background: transparent;
  border: 10px solid #cbcbcb;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
 }
.sort li:nth-of-type(5) {
  font-size: 0;
  display: block;
  width: 15px;
}
.sort li:nth-of-type(5) button {
  height: 100%;
  width: 100%;
  position: relative;
}
.sort li:nth-of-type(5) button::after {
  content: '';
  position: absolute;
  left: -20%;
  top: 20%;
  width: 0;
  height: 0;
  background: transparent;
  border: 10px solid #cbcbcb;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
 }
 .sort li:nth-of-type(5) button.active::after{
  border: 10px solid #81b3d2;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
 }
</style>

