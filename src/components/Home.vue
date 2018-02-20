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
    <section class="index-title">
      <h1>Седона &#8211; небольшой городок в аризоне, заслуживающий большего!</h1>
      <p>Рассмотрим 5 причин, по которым седона круче, чем гранд каньон!</p>
    </section>
    <section class="first-feature">
      <figure>
        <figcaption>
          <h2>Настоящий городок</h2>
          <span>&#8211; №1 &#8211;</span>
          <p>Седона &#8211; не аттракцион для туристов,<br>
          там течет своя жизнь</p>
        </figcaption>
        <img src="./../assets/flag.jpg" alt="Вид на город">
      </figure>
    </section>
    <section class="advantages">
      <div>
        <img
        src="./../assets/icon-home.png"
        alt="Лучшие отели"
        class="advantage-1">
        <h2 class="advantege-title">Жилье</h2>
        <p>Рекомендуем пожить в настоящем мотеле, все как в кино!</p>
      </div>
      <div>
        <img
        src="./../assets/icon-burger.png"
        height="70"
        width="74"
        alt="Вкуснейшая еда"
        class="advantage-2">
        <h2 class="advantage-title">Еда</h2>
        <p>Всегда заказывайте фирменный бургер, <br> вы не разочаруетесь</p>
      </div>
      <div>
        <img
        src="./../assets/icon-gift.png"
        height="76"
        width="64"
        alt="Красивые сувениры"
        class="advantage-3">
        <h2 class="advantage-title">Сувениры</h2>
        <p>Не только китайского, но и местного производства!</p>
      </div>
    </section>
    <section class="second-feature">
      <figure>
        <img src="./../assets/index-second.jpg" alt="Мост дьявола">
        <figcaption>
          <h2>Там есть<br> мост дьявола</h2>
          <span>&#8211; №2 &#8211;</span>
          <p>Да, по нему можно пройти! Если конечно <br> вы осмелитесь</p>
        </figcaption>
      </figure>
    </section>
    <section class="row-features">
      <div>
        <h2>Небольшая<br> площадь</h2>
        <span>&#8211; №3 &#8211;</span>
        <p>Все достопримечательности</p>
      </div>
      <div>
        <h2>Красивая дорога</h2>
        <span>&#8211; №4 &#8211;</span>
        <p>Ехать в седону из Лас-Вегаса совсем<br>не скучно!</p>
      </div>
      <div>
        <h2>Мало туристов</h2>
        <span>&#8211; №5 &#8211;</span>
        <p>Большинство едет в гранд каньон и толпится там</p>
      </div>
    </section>
    <section class="hotels">
      <em>Заинтересовались?</em>
      <p>Укажите предпологаемые даты поездки,
      и мы покажем вам лучшие предложения гостиниц в седоне</p>
      <button>Поиск гостиницы в седоне</button>
      <app-hotel-search></app-hotel-search>
    </section>
    <section id="map"></section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style>
.welcome {
  background: url('/static/top-bg.png');
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
}
.welcome-decor {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
