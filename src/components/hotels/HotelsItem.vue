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
          <span>Рейтинг: {{ hotel.rating }}</span>
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
/*стили для разработки*/
/*a, div, li, nav, ul, header,
footer, figure, form,
label, h1, h2, p, fieldset, button, input, section {
  outline: 1px solid green;
}*/
/*стили для разработки*/
.result-item {
  width: 100%;
  height: 150px;
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
  width: 136px;
  height: 91px;
}
.result-item .hotel-photo {
  margin: 0;
  padding: 0;
  width: 100%;
}
.hotel-description-wrapper {
  display: flex;
  width: 87.6%;
  height: 90px;
  justify-content: space-between;
}
.hotel-description {
  width: 70%;
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
  text-align: left;
  width: 105px;
}
.hotel-description .hotel-price {
  margin-left: 1.5%;
  text-align: left;
}
.hotel-description .hotel-info {
  display: block;
  padding: 0.6% 2.63%;
  text-decoration: none;
  background: #81B3D1;
  color: #fff;
  font-size: 0.87em;
}
.hotel-description .hotel-reserve {
  display: block;
  padding: 0.6% 2.67%;
  margin-left: 1%;
  text-decoration: none;
  color: #fff;
  font-size: 0.87em;
  background: #746153;
}
.rating {
  width: 109px;
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
  width: 19px;
  height: 19px;
  padding-left: 2px;
  padding-right: 2px;
}
.rating .img-star {
  width: 19px;
}
.rating span {
  display: block;
  position: absolute;
  width: 100%;
  height: 30px;
  line-height: 30px;
  bottom: 0;
  padding: ;
  margin: 0;
  font-size: 0.86em;
  font-weight: normal;
  text-align: center;
  color: #666;
  background: #f2f2f2;
}
</style>
