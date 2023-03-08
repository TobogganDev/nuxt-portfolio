<template>
  <div>
    <div class="img">
      <img src="../img/statue.png" alt="">
    </div>
    <div class="top">
      <h2>Fullstack</h2>
    </div>
    <div class="bottom">
      <h2>Developer</h2>
    </div>
    
    <div class="skills">
      <div class="row">
        <span>vue.js</span>
        <img src="../img/psy1.jpg" alt="">
        <span>symfony</span>
        <img src="../img/psy2.jpg" alt="">
      </div>
      <div class="row">
        <span>tailwindcss</span>
        <img src="../img/psy3.jpg" alt="">
        <span>Sass</span>
      </div>  
      <div class="row">
        <img src="../img/psy4.jpg" alt="">
        <span>figma</span>
        <img src="../img/psy5.jpg" alt="">
        <span>mysql</span>
      </div>
    </div>
    
    <div class="projects">
      <div class="project-title">
        <h2>Projects * <span>Projects</span> * Projects</h2>
      </div> 
      <NuxtLink to="">
        <ProjectCard :name="'République'" :src="'img/repu.png'"/>
      </NuxtLink>
      
      
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.img{
  position: absolute;
  top: 10%;
  right: 20%;
  transform: rotate(30deg);
  width: 5vw;
  @media screen and (max-width: 1000px) {
    display: none;
    
  }
}
.top{
  height: 50vh;
  display: flex;
  background-color: #F8EDE3;
  text-transform: uppercase;
  h2{
    margin-top: auto;
    font-size: 10vw;
    color: #181818;
  }
}

.bottom{
  height: 50vh;
  display: flex;
  text-transform: uppercase;
  h2{
    font-size: 10vw;
    color: #F8EDE3;
  }
}

.skills{
  color: #F8EDE3;
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  .row{
    font-size: 5vw;
    // line-height: 88px;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    column-gap: 1rem;
    
    span{
      flex-shrink: 0;
      font-weight: 700;
    }
    img{
      height: 5vw;
      width: 0;
      flex-grow: 1;
      object-fit: cover;
      border-radius: 34px;
    }
  }
}

.projects{
  // background-color: #1CD6CE;
  // background-image: url('@/assets/psy2.jpg');
  // background-size: cover;
  // background-position: center;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  margin-top: 5rem;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
  .project-title{
    width: 100%;
    text-transform: uppercase;
    font-size: 10vw;
    white-space: nowrap;
    overflow: hidden;
    z-index: -1;
    font-family: "Bandeins Strange";
    h2{
      animation: rotate 30s linear infinite!important;
      color: white;
      margin-bottom: -30px;
      margin-top: -50PX;
      padding-top: 5rem;
      
      span{
        color: transparent;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: white;
      }
    }
    @keyframes rotate {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
  
}
</style>