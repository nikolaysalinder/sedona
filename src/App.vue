<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/*--gray-bg: #f2f2f2;
--content-color: #fefefe;
--blue: #71b3d2;
--brown: #766357;
--gray: #666666;*/
/*стили для разработки*/
/*a, div, li, nav, ul, header,
footer, figure, form,
label, h1, h2, p, fieldset, button, input, section {
  outline: 1px solid green;
}*/
/*стили для разработки*/
body {
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  text-transform: uppercase;
}
#app {
  font-family: 'Pt Sans', 'Gerogia', serif;
  font-weight: 700;
  width: 91.5%;
  margin: 0 auto;
  padding: 0;
  background-color: #fefefe;
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.5);
}
@media screen and (max-width: 768px) {
  #app {
    width: 768px;
  }
}
</style>
