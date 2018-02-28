<template>
  <div class="hotels">
    <section class="filters">
      <form class="filters-form">
        <section class="filter-options">
          <h2 class="filter-title">Инфраструктура:</h2>
          <label
          for="option1">
            <span class="checkbox-indicator"></span>
            <input
            id="option1"
            type="checkbox"
            checked>
            Бассейн
          </label>
          <label
          for="option2">
            <span class="checkbox-indicator"></span>
            <input
            id="option2"
            type="checkbox">
            Парковка
          </label>
          <label
          for="option3">
            <span class="checkbox-indicator"></span>
            <input
            id="option3"
            type="checkbox">
            wi-fi
          </label>
        </section>
        <section class="filter-types">
          <h2 class="filter-title">Тип жилья:</h2>
          <label
          for="type1">
            <span class="checkbox-indicator"></span>
            <input
            id="type1"
            type="checkbox"
            checked>
            Гостиница
          </label>
          <label
          for="type2">
            <span class="checkbox-indicator"></span>
            <input
            id="type2"
            type="checkbox">
            Мотель
          </label>
          <label
          for="type3">
            <span class="checkbox-indicator"></span>
            <input
            id="type3"
            type="checkbox">
            Апартаменты
          </label>
        </section>
        <section class="filter-price">
          <h2 class="filter-title">Стоимость в сутки:</h2>
          <label for="range-min">от</label>
          <label for="range-max">до</label>
          <input type="range">
          <button type="submit">Показать</button>
        </section>
      </form>
    </section>
    <section class="results">
      <div class="sort">
        <b>найдено: 3</b>
        <span>сортировка:</span>
        <ul>
          <li><button>По-цене</button></li>
          <li><button>Потипу</button></li>
          <li><button>По рейтингу</button></li>
          <li>
            <button>По увеличению</button>
            <button>По уменьшению</button>
          </li>
        </ul>
      </div>
      <div class="result-item">
        <img src="#" alt="#" class="hotel-photo">
        <div class="description">
          <h2 class="hotel-title">Amara Resort & spa</h2>
          <p class="hotel-type">Гостиница</p>
          <p class="price">От 4000 р </p>
          <a href="#" class="more-info">Подробнее</a>
          <a href="" class="reserve">Забронировать</a>
        </div>
        <div class="rating">
          <ul>
            <li class="stars"></li>
          </ul>
          <p>Рейтинг: 8,5</p>
        </div>
      </div>
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
  background: url('./../../assets/hotels-bg.jpg');
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
  margin-bottom: 6.1%;
  margin-left: 15.2%;
  font-size: 0.9em;
}
.filter-options input[type="checkbox"] {
  display: none;
}
.filter-title {
  font-size: 1.03em;
}
.filter-types {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 24%;
}
.filter-types label {
  margin-top: 4.4%;
  margin-bottom: 6.1%;
  margin-left: 16.4%;
  font-size: 0.9em;
}
.filter-types input[type="checkbox"] {
  display: none;
}
</style>
