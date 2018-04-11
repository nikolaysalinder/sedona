<template>
  <div class="media">
    <div class="catalog-items">
      <div
      class="catalog-item"
      v-for="photo in photos"
      :key="photo.id"
      :id="photo.id"
      >
        <img
        class="catalog-image"
        :src="photo.src"
        alt="Фотографии седоны"
        width="auto"
        heigth="auto">
        <p class="catalog-date">{{ photo.date }}</p>
        <p class="catalog-description">{{ photo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        { id: 1, src: './static/img/sedona-1.jpg', date: '11.12.13', description: 'Крутые горы' },
        { id: 2, src: './static/img/sedona-2.jpg', date: '10.12.13', description: 'Пустыня горы' },
        { id: 3, src: './static/img/sedona-3.jpg', date: '11.12.14', description: 'Виды просто класс' },
        { id: 4, src: './static/img/sedona-4.jpg', date: '9.9.01', description: 'Песочек, скалы, красоты, горы' },
        { id: 5, src: './static/img/sedona-5.jpg', date: '09.11.15', description: 'Внатуре класс!!!' },
        { id: 6, src: './static/img/sedona-6.jpg', date: '12.30.01', description: 'Неизгладимое впечатление' },
        { id: 7, src: './static/img/sedona-7.jpg', date: '22.03.05', description: 'На следующий год только сюда' },
      ],
    };
  },
};
</script>

<style>
.media .catalog-items {
  position: relative;
  clear: both;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3px;
  margin-bottom: 3px;
}
.media .catalog-item {
  position: relative;
  border: 1px solid #ccc;
  min-width: 0;
  margin: 1px;
}
.media .catalog-image {
  width: 100%;
  height: 100%;
}
.media .catalog-date {
  position: absolute;
  bottom: 3%;
  left: 3%;
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
}
.media .catalog-description {
  position: absolute;
  bottom: 0.4%;
  right: 3%;
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
}
</style>
