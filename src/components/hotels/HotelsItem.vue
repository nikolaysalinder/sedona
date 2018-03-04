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
      <div class="hotel-description-wrapper">
        <div class="hotel-description">
        <h2 class="hotel-title">{{ hotel.title }}</h2>
        <div class="hotel-type-wrapper">
          <p class="hotel-type">{{ hotel.type }}</p>
          <p class="hotel-price">От {{ hotel.price }} р</p>
        </div>
        <div class="hotel-info-wrapper">
          <a href="#" class="hotel-info">Подробнее</a>
          <a href="#" class="hotel-reserve">Забронировать</a>
        </div>
        </div>
        <div class="rating">
          <ul>
            <li
            v-for="star in hotel.stars"
            :key="star"
            class="stars">
              <img
              src="./../../assets/star.png"
              alt="stars"
              class="img-star">
            </li>
          </ul>
          <p>Рейтинг: {{ hotel.rating }}</p>
        </div>
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
  padding: 2.48% 6%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
}
.result-item figure {
  display: block;
  margin: 0;
  padding: 0;
  width: 14.7%;
}
.result-item .hotel-photo {
  margin: 0;
  padding: 0;
  width: 100%;
}
.hotel-description-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.hotel-description {
  width: 40%;
  padding-left: 3.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hotel-description .hotel-title {
  margin: 0;
  padding: 0;
  font-size: 1.34em;
  font-weight: 600;
  line-height: 0.8em;
  text-align: left;
}
.hotel-description .hotel-type-wrapper {
  display: flex;
  align-items: baseline;
  font-weight: normal;
  font-size: 0.89em;
}
.hotel-description .hotel-info-wrapper {
  display: flex;
}
.hotel-description .hotel-type {
  width: 110px;
}
.hotel-description .hotel-price {
  margin-left: 1.5%;
}
.hotel-description .hotel-info {
  display: block;
  padding: 1% 4.5%;
  text-decoration: none;
  background: #81B3D1;
  color: #fff;
  font-size: 0.87em;
}
.hotel-description .hotel-reserve {
  display: block;
  padding: 1% 4.7%;
  margin-left: 1.7%;
  text-decoration: none;
  color: #fff;
  font-size: 0.87em;
  background: #746153;
}
.rating {
  width: 12%;
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
  height: 100%;
  width: 100%;
}
.rating li {
  width: 20%;
  height: 20%;
}
.rating .img-star {
  width: 100%;
}
.rating p {
  display: block;
  position: absolute;
  bottom: 0;
  padding: 3.6% 13%;
  margin: 0;
  font-size: 0.86em;
  font-weight: normal;
  text-align: center;
  color: #666;
  background: #f2f2f2;
}
</style>
