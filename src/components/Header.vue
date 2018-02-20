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
        { path: '/', text: 'Главная' },
        { path: '4', text: 'Карта штата' },
        { path: '5', text: 'Гостиницы' },
      ],
    };
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
  position: relative;
}
.main-nav-item:nth-child(3) a {
  position: absolute;
  left: center;
  margin-left: -29%;
  min-width: 100%;
  top: -10px;
  height: 70px;
  background: url('./../assets/top-logo.png');
  background-repeat: no-repeat;
  background-position: 0% 0%;
  font-size: 0;
  z-index: 1;
}
</style>
