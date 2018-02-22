<template>
  <header class="top-nav">
    <nav class="main-nav">
      <ul>
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          tag="li"
          class="main-nav-item"
          exact>
          <a>
            {{ link.text }}
            <img
            v-if="link.logo"
            src="./../assets/top-logo.png"
            height="70"
            width="138" alt="Главная">
          </a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: '1', text: 'Информация' },
        { path: '2', text: 'Фото и Видео' },
        { path: '/', text: 'Главная', imgSrc: '/static/img/top-logo.png', logo: 'true' },
        { path: '4', text: 'Карта штата' },
        { path: '5', text: 'Гостиницы' },
      ],
    };
  },
  computed: {
  },
};
</script>

<style>
.main-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
}
.main-nav-item {
  padding-top: 18px;
  padding-bottom: 20px;
  font-size: 0.90rem;
  width: 20%;
  text-align: center;
}
.main-nav-item a {
  text-decoration: none;
  color: #000;
}
.main-nav-item:nth-child(3) {
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 0;
}
.main-nav-item:nth-child(3) a {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: -29px;
}
.main-nav-item:nth-child(3) a img{
  width: 138px;
  height: auto;
}
</style>
