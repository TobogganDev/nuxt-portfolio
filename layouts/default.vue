<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">
          <h1>Thomas doret-gaïsset</h1>
          <br>
          <h2>Currently looking for an internship in September 2023</h2>
        </NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
    
    <!-- Output the page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header{
  position: fixed;
  width: 100%;
  padding: 1rem 2rem;
  font-weight: 200;
  z-index: 500;
  mix-blend-mode: difference;
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    >a{
      h1{
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 200;
      }
      h2{
        font-size: 16px;
        font-weight: 200;
        @media screen and (max-width : 1000px) {
          display: none;
        }
      }
    }
    ul{
      display: flex;
      list-style: none;
      gap: 2em;
      font-weight: 700;
      li{
        a{
          position: relative;
          &::after{
            content: '';
            border-radius: 50px;
            position: absolute;
            left: 50%;
            bottom: -3px;
            width: 100%;
            height: 2px;
            background-color: #DAFFF4;
            transform-origin: center;
            transform: translate(-50%, 0) scaleX(0);
            transition: transform 0.3s ease-in-out;
          }
          &:hover::after{
            transform: translate(-50%, 0) scaleX(1);
          }
        }
      }
    }
  }
  
}
</style>