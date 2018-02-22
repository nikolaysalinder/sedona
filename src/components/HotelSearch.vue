<template>
  <form class="search-form">
    <fieldset>
      <label
      for="date-in"> Дата заезда:</label>
      <input
      id="date-in"
      type="date"
      name="datein"
      placeholder="27 апреля">
    </fieldset>
    <fieldset>
      <label
      for="date-out">Дата выезда:</label>
      <input
      type="date"
      id="date-out"
      name="dateout">
    </fieldset>
    <fieldset>
      <label>Взрослые:</label>
        <button
        class="icon-plus">Увеличить количество взрослых</button>
        <input type="number">
        <button
        class="icon-minus">Уменьшить количество детей</button>
    </fieldset>
    <fieldset>
      <label>Дети:
        <button
        class="icon-plus">Увеличить количество взрослых</button>
        <input type="number">
        <button
        class="icon-minus">Уменьшить количество детей</button>
      </label>
    </fieldset>
   <input
   class="btn"
   type="submit"
   value="Найти">
  </form>
</template>

<script>

</script>

<style>
.search-form {
  width: 40%;
  margin: 0 auto;
  font-size: inherit;
  padding: 4.2% 3.5%;
  font-size: 0.899em;
}
.search-form fieldset {
  border: 0;
  margin: 0;
  position: relative;
  margin-bottom: 3%;
}
.search-form #date-in {
  margin-left: 0.8%;
}
.search-form input {
  background-color: lightblue;
  border: none;
  padding: 2%;
  width: 71%;
}
.search-form label {
  margin-right: 3.3%;
  margin-left: 0.2%;
}
</style>
