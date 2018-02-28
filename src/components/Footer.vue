<template>
  <footer class="main-footer">
    <section class="footer-hash">
      <a href="https://www.google.ru/search?q=%23visitsedona&oq=%23visitsedona&aqs=chrome..69i57.3488j0j8&client=ubuntu&sourceid=chrome&ie=UTF-8">#visitsedona</a>
    </section>
    <section class="footer-socials">
      <ul>
        <li>
          <a
          class="socials-twitter"
          href="https://twitter.com">My twitter</a>
        </li>
        <li>
          <a
          class="socials-facebook"
          href="https://facebook.com/nikolay.salinder">My facebook</a>
        </li>
        <li>
          <a
          class="socials-youtube"
          href="https://youtube.com/">My youtube</a>
        </li>
      </ul>
    </section>
    <section class="footer-copyright">
      <p>website by</p>
      <a href="http://nikolaysalinder.ru">nikolay<br>salinder<br>.ru</a>
    </section>
  </footer>
</template>

<script>
</script>

<style>
.main-footer {
  display: flex;
  padding-bottom: 3%;
}
.footer-hash a {
  text-decoration: none;
  color: #000;
  font-size: 1.3em;
  transition: .5s;
}
.footer-hash a:hover {
  color: #81b3d2;
}
.footer-hash {
  width: 33.33333%;
  text-align: center;
  margin-top: 4%;
}
.footer-socials {
  width: 33.33333%;

}
.footer-socials ul,
.footer-socials li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}
.footer-socials ul {
  width: 37.2%;
  height: 55%;
  margin: 0 auto;
  margin-top: 9.5%;
  justify-content: space-between;
}
.footer-socials li {
  width: 30%;
}
.footer-socials a {
  display: block;
  width: 100%;
  font-size: 0;
}
.socials-twitter {
  background: #81b3d2 url('./../assets/socials-tweet.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.socials-facebook {
  background: #81b3d2 url('./../assets/socials-fb.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.socials-youtube {
  background: #81b3d2 url('./../assets/socials-youtube.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.footer-copyright {
  width: 33.33333%;
  display: flex;
  justify-content: center;
  padding-top: 3.14%;
}
.footer-copyright p {
  font-size: 0.9em;
  font-weight: normal;
  align-items: center;
  margin-right: 13%;
}
.footer-copyright a {
  text-decoration: none;
  color: #000;
}
.footer-copyright a {
  text-decoration: none;
  color: #000;
  line-height: 1em;
  transition: all .5s;
}
.footer-copyright a:hover {
  color: #81b3d2;
}
</style>
