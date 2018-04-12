<template>
  <header class="top-nav">
    <nav class="main-nav">
      <ul>
        <router-link
        v-for="link in links"
        :key="link.ids"
        :to="link.path"
        tag="li"
        class="main-nav-item"
        exact>
        <a :class="{ disabled: link.disabled }">
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
        { ids: '1', path: '/', text: 'Информация' },
        { ids: '2', path: '/media', text: 'Фото и Видео' },
        { ids: '3', path: '/', text: 'Главная', imgSrc: '/static/img/top-logo.png', logo: 'true' },
        { ids: '4', path: '4', text: 'Карта штата', disabled: true },
        { ids: '5', path: '/hotels', text: 'Гостиницы' },
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
.main-nav-item a:hover {
  color: #81b3d2;
  transition: color ease .5s;
}
.main-nav-item a:active {
  color: #cdcdcd;
}
.main-nav-item.router-link-exact-active a{
  color: #766357;
}
.main-nav-item:nth-child(3) {
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 0;
}
.main-nav-item:nth-child(3) a {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: -29px;
}
.main-nav-item:nth-child(3) a img{
  width: 138px;
  height: auto;
}
.main-nav-item a.disabled{
  color: rgba(118,99,87,0.3);
  cursor: default;
}
</style>
