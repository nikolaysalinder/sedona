<template>
  <div>
    <div
    class="result-item"
    v-for="hotel in hotels"
    :key="hotel.title">
      <figure>
        <img
        :src="hotel.imgSrc"
        alt="#"
        class="hotel-photo">
      </figure>
      <div class="hotel-description">
        <h2 class="hotel-title">{{ hotel.title }}</h2>
        <div class="hotel-type-wrapper">
          <p class="hotel-type">{{ hotel.type }}</p>
          <a href="#" class="hotel-info">Подробнее</a>
        </div>
        <div class="hotel-price-wrapper">
          <p class="hotel-price">От {{ hotel.price }} р</p>
          <a href="#" class="hotel-reserve">Забронировать</a>
        </div>
      </div>
      <div class="rating">
        <ul>
          <li
          v-for="star in hotel.stars"
          :key="star"
          class="stars"></li>
        </ul>
        <p>Рейтинг: {{ hotel.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotels: [
        { title: 'Amara Resort & spa', type: 'гостиница', price: '4000', stars: 4, rating: 8.5, imgSrc: './static/img/hotel-1.jpg' },
        { title: 'Desert Quail Inn', type: 'мотель', price: '3000', stars: 3, rating: 8.9, imgSrc: './static/img/hotel-2.jpg' },
        { title: 'Villas at Poco Diablo', type: 'апартаменты', price: '2000', stars: 2, rating: 9.2, imgSrc: './static/img/hotel-3.jpg' },
      ],
    };
  },
};
</script>

<style>
.result-item {
  width: 100%;
  margin: 0;
  padding: 2.5% 6%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
}
.result-item figure {
  display: block;
  margin: 0;
  padding: 0;
  width: 136px;
  height: 90px;
}
.result-item .hotel-photo {
  margin: 0;
  padding: 0;
}
.hotel-description {
  width: 40%;
  box-sizing: border-box;
  padding-left: 2.7%;
}
.hotel-description .hotel-title {
  margin: 0;
  padding: 0;
  font-size: 1.34em;
  font-weight: 600;
  line-height: 0.8em;
}
.hotel-description .hotel-type {
  display: block;
  font-weight: normal;
  font-size: 0.89em;
  line-height: 0.9em;
}
.hotel-description .hotel-price {
  font-weight: normal;
  font-size: 0.89em;
  line-height: 0.9em;
}
.hotel-description .hotel-type-wrapper {
  width: 28.6%;
  height: 80%;
  margin-top: 0.21%;
  margin-right: 0.7%;
  float: left;
}
.hotel-description .hotel-price-wrapper {
  width: 39%;
  height: 80%;
  margin-top: 0.21%;
  margin-right: 0.7%;
  float: left;
}
.hotel-description .hotel-info {
  display: block;
  width: 80%;
  margin-top: 19px;
  margin-left: 0.8%;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  background: #81B3D1;
  color: #fff;
  font-size: 0.87em;
}
.hotel-description .hotel-reserve {
  display: block;
  width: 120px;
  margin-top: 19px;
  margin-left: 0.9%;
  padding: 4px 12px;
  text-align: center;
  text-decoration: none;
  background: #746153;
  color: #fff;
  font-size: 0.87em;
}
.rating {
  margin-left: 37%;
  width: 10.5%;
  position: relative;
  padding: 0;
}
.rating ul,
.rating li {
  margin: 0;
  padding: 0;
}
.rating ul {
  list-style: none;
  display: flex;
  flex-direction: row-reverse;
}
.rating li {
  width: 23px;
  height: 20px;
  background: url('./../../assets/star.png');
  background-repeat: no-repeat;
  background-position: 4px -1px;
}
.rating p {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 3.6%;
  padding-bottom: 3.6%;
  margin: 0;
  font-size: 0.86em;
  font-weight: normal;
  text-align: center;
  color: #666;
  background: #f2f2f2;
}
</style>
