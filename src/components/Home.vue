<template>
  <div class="home">
    <section class="welcome">
      <img
      class="welcome-text"
      src="./../assets/welcome.png"
      alt="Welcome to the gorgeous Sedona Because the Grand Canyon sucks">
      <img
      src="./../assets/index-decor.png"
      class="welcome-decor">
    </section>
    <section class="page-title">
      <h1>Седона &#8211; небольшой городок в аризоне,<br>заслуживающий большего!</h1>
      <p>Рассмотрим 5 причин, по которым седона круче, чем гранд каньон!</p>
    </section>
    <section class="first-feature">
      <div class="feature-item">
        <h2>Настоящий <br>городок</h2>
        <span>&#8211; №1 &#8211;</span>
        <p>Седона &#8211; не аттракцион для туристов,<br>
        там течет своя жизнь</p>
      </div>
      <div class="feature-img-mask">
          <img src="./../assets/flag.jpg" alt="Вид на город">
      </div>
    </section>
    <section class="advantages">
      <div class="advantage">
        <img
        src="./../assets/icon-home.png"
        alt="Лучшие отели">
        <h2 class="advantege-title">Жилье</h2>
        <p>Рекомендуем пожить в настоящем <br>мотеле, все как в кино!</p>
      </div>
      <div class="advantage">
        <img
        src="./../assets/icon-burger.png"
        alt="Вкуснейшая еда">
        <h2 class="advantage-title">Еда</h2>
        <p>Всегда заказывайте фирменный бургер, <br> вы не разочаруетесь</p>
      </div>
      <div class="advantage">
        <img
        src="./../assets/icon-gift.png"
        alt="Красивые сувениры">
        <h2 class="advantage-title">Сувениры</h2>
        <p>Не только китайского, но и местного<br> производства!</p>
      </div>
    </section>
    <section class="second-feature">
      <div class="feature-img-mask">
        <img src="./../assets/index-second.jpg" alt="Мост дьявола">
      </div>
      <div class="feature-item">
        <h2>Там есть<br> мост дьявола</h2>
        <span>&#8211; №2 &#8211;</span>
        <p>Да, по нему можно пройти! Если конечно <br> вы осмелитесь</p>
      </div>
    </section>
    <section class="features-row">
      <div class="feature-item">
        <h2>Небольшая<br> площадь</h2>
        <span>&#8211; №3 &#8211;</span>
        <p>Все достопримечательности<br> находятся очень близко</p>
      </div>
      <div class="feature-item">
        <h2>Красивая<br> дорога</h2>
        <span>&#8211; №4 &#8211;</span>
        <p>Ехать в седону из Лас-Вегаса совсем<br>не скучно!</p>
      </div>
      <div class="feature-item">
        <h2>Мало<br> туристов</h2>
        <span>&#8211; №5 &#8211;</span>
        <p>Большинство едет в гранд каньон и<br> толпится там</p>
      </div>
    </section>
    <section class="hotels">
      <p class="hotels-title">Заинтересовались?</p>
      <p class="hotels-text">Укажите предполaгаемые даты поездки,<br>
      и мы покажем вам лучшие предложения гостиниц в седоне</p>
      <button
      class="btn btn-hotels">Поиск гостиницы в седоне
      </button>
    </section>
    <section id="map">
      <app-hotel-search></app-hotel-search>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<style>
.welcome {
  background-position: 50% 29%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
  overflow: hidden;
}
.welcome-text {
  display: block;
  margin: 76px auto;
  width: 38%;
}
.welcome-decor {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.page-title h1 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 60px;
  font-size: 1.33em;
}
.page-title p {
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 29px;
  font-size: 0.88em;
}
.first-feature {
  display: flex;
  margin-top: 4.9%;
  height: 255px;
  background: #81b3d2;
  color: #fff;
}
.first-feature img {
  margin-top: -10%;
}
.feature-img-mask {
  width: 66.66666%;
  overflow: hidden;
}
.feature-item {
  width: 33.33333%;
  text-align: center;
  text-transform: uppercase;
}
.feature-item h2 {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.33em;
  margin-top: 11.2%;
  line-height: 1.04em;
}
.feature-item span {
  display: block;
  text-align: center;
  font-weight: normal;
  margin-top: 6%;
  font-size: 0.9em;
}
.feature-item p {
  text-transform: uppercase;
  text-align: center;
  margin-top: 5.6%;
  line-height: 1.5em;
  font-size: 0.88em;
  font-weight: normal;
}
.advantages {
  display: flex;
}
.advantage {
  width: 33.3333333%;
  text-transform: uppercase;
  padding-bottom: 5.6%;
}
.advantage img {
  display: block;
  margin: 0 auto;
  margin-top: 15%;
  height: 28%;
}
.advantage h2 {
  text-align: center;
  margin-top: 6.5%;
  font-size: 1.3em;
}
.advantage p {
  text-align: center;
  font-weight: normal;
  font-size: 0.90em;
  margin-top: 5.5%;
}
.second-feature {
  display: flex;
  height: 256px;
  color: #fff;
  background: #81b3d2;
}
.second-feature img {
  margin-top: -75px;
}
.features-row {
  display: flex;
  background: #eee;
  height: 255px;
}
.hotels {
  text-align: center;
  position: relative;
}
.hotels-title {
  margin-top: 4.2%;
  font-size: 1.88em;
  margin-bottom: 0;
}
.hotels-text {
  font-size: 0.88em;
  font-weight: normal;
  margin-top: 1.9%;
  line-height: 1.7em;
}
.btn-hotels {
  display: block;
  margin: 0 auto;
  margin-top: 4%;
  width: 63%;
  background: gray;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  width: 47%;
  padding-top: 2.4%;
  padding-bottom: 2.4%;
  font-size: 1.32em;
  color: #fff;
  font-family: inherit;
  background: #766357;
}
#map {
  background: #f3f3f3;
  margin: 0;
  padding: 0;
  height: 470px;
}
</style>
