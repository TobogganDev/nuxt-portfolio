<template>
  <div>
    <div class="c-project">
      <img :src="project.src" alt="hover img">
      <div class="content">
        <h3>{{ project.name }}</h3>
        <div class="arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const project = defineProps(['name','src'])
</script>

<style lang="scss" scoped>
.c-project{
  padding: 2rem 5rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background: transparent;
  overflow: hidden;
  transition: all .6s cubic-bezier(.86, 0, .07, 1);
  position: relative;
  background: #181818;
  z-index: 500;
  @media screen and (max-width : 500px) {
    padding: 2rem 2rem;
  }
  &:hover{
    padding: 2.5rem 5rem;
    img{
      opacity: 1;
    }
    .content .arrow{
      padding-left: 2rem;
    }
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .6s cubic-bezier(.86, 0, .07, 1);
  }
  .content{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow{
      padding: 0.5rem 1rem;
      border: 2px solid white;
      border-radius: 30px;
      transition: all .6s cubic-bezier(.86, 0, .07, 1);
    }
  }
}
</style>