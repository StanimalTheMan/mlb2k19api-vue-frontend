<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(
    90deg,
    rgba(36, 35, 0, 1) 0%,
    rgba(121, 9, 12, 1) 0%,
    rgba(0, 53, 255, 1) 100%
  );
}

a {
  color: white;
}

#links {
  text-align: center;
}
ul {
  display: inline-block;
  text-align: left;
  font: 24px "Times New Roman", san-serif;
}
</style>
