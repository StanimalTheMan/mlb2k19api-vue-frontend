<template>
  <div>
      <router-link to="/">
        <h1>MLB2K19 API</h1>
      </router-link>
      <router-link to="/batting">
        <h3>Batters</h3>
      </router-link>
      <router-link to="/pitching">
        <h3>Pitchers</h3>
      </router-link>
  </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>

</style>