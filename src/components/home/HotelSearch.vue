<template>
  <transition name="slide">
    <form
    class="search-form"
    v-if="showSearchForm">
      <ul class="flex-container">
        <li>
          <label
          for="date-in"> Дата заезда:</label>
          <input
          id="date-in"
          type="text"
          name="datein"
          placeholder="24 апреля 2018">
        </li>
        <li>
          <label
          for="date-out">Дата выезда:</label>
          <input
          type="text"
          id="date-out"
          name="dateout"
          placeholder="4 июля 2018">
        </li>
        <li>
          <ul class="counters">
            <li class="adult-counter">
              <label for="adult">Взрослые:</label>
              <div class="adult-input-wrapper">
                <button
                @click.prevent="adultCounter - 1 >= 0 ? adultCounter-= 1 : 0"
                class="icon-minus">Увеличить количество взрослых</button>
                <input
                id="adult"
                type="text"
                v-model="adultCounter">
                <button
                @click.prevent="adultCounter += 1"
                class="icon-plus">Уменьшить количество взрослых</button>
              </div>
            </li>
            <li class="child-counter">
              <label
              for="child">Дети:</label>
              <div class="child-input-wrapper">
                <button
                @click.prevent="childCounter - 1 >= 0 ? childCounter-= 1 : 0"
                class="icon-minus">Увеличить количество детей</button>
                <input
                id="child"
                type="text"
                v-model="childCounter">
                <button
                @click.prevent="childCounter += 1"
                class="icon-plus">Уменьшить количество детей</button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <input
      class="btn btn-search"
      type="submit"
      value="Найти">
    </form>
  </transition>
</template>

<script>
export default {
  props: ['showSearchForm'],
  data() {
    return {
      adultCounter: 2,
      childCounter: 0,
    };
  },
};
</script>

<style>
.search-form {
  width: 37.8%;
  margin: 0 auto;
  padding: 4.6% 4.6%;
  border: 0;
  font-size: 0.88em;
  height: 60%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -23.5%;
  z-index: 0;
}
.search-form ul,
.search-form li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.search-form .flex-container,
.search-form li {
  display: flex;
  justify-content: space-between;
}
.search-form .flex-container {
  flex-direction: column;
  height: 60.7%;
}
.search-form input {
  background: #f3f3f2;
  border: none;
  padding: 9px 0;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  text-transform: inherit;
  z-index: 1;
}
#date-in,
#date-out {
  padding-left: 2.6%;
  width: 73%;
}
.search-form li {
  align-items: center;
}
.counters {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
li.adult-counter{
  display: flex;
  width:  50%;
  justify-content: space-between;
}
li.child-counter {
  display: flex;
  width: 50%;
  justify-content: flex-end;
}
li.child-counter label {
  margin-right: 12%;
}
.adult-input-wrapper {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 51%;
}
.child-input-wrapper {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 51%;
}
.counters input {
  height: 100%;
  width: 33.33333%;
  padding-left: 12%;
  box-sizing: border-box;
  margin: 0;
}
.counters button {
  font-size: 0;
  width: 33.33333%;
  height: 100%;
  box-sizing: border-box;
  background: #f3f3f2;
  margin: 0;
  border: 0;
}
.counters .icon-minus {
  background: #f3f3f2 url('./../../assets/minus.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.counters .icon-plus {
  background: #f3f3f2 url('./../../assets/plus.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.search-form .btn-search {
  width: 100%;
  margin: 0 auto;
  margin-top: 11.5%;
  padding: 3% 5%;
  font-size: 1.5em;
  color: #fff;
  background-color: #81b3d2;
}
.slide-enter {
  transform: translateY(-100%);
}
.slide-enter-active {
  transition: all 1s;
  transition-timing-function: ease-in-out;
}
.slide-leave-active {
  transform: translateY(-100%);
  transition: all 1s;
  transition-timing-function: ease-in-out;
}
@media  screen and (max-width: 1111px) {
  .flex-container li {
    flex-direction: column;
    align-items: flex-start;
  }
  #date-in,
  #date-out {
    width: 97.5%;
    margin-bottom: 10%;
  }
  .child-input-wrapper,
  .adult-input-wrapper {
    height: 60px;
    width: 90px;
  }
  .first-feature img,
  .second-feature img {
    margin-top: 0;
    height: 100%;
  }
}
</style>
