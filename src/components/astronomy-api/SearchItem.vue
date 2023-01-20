<template>
  <div class="card">
    <div class="info">
      <div class="type">{{ type }}</div>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CelestialItem",
  props: {
    type: {
      type: String,
      default: "default type",
    },
    name: {
      type: String,
      default: "default name",
    },
  },
};
</script>
<style>
.card {
  margin: 10px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  border-radius: 10px;
}
.card:hover {
  background-color: #dddddd;
}
.card .info {
  display: inherit;
  width: 90%;
  align-items: center;
}
.card .info .type {
  width: 40%;
}
.card .info .name {
  margin-left: 1em;
}
q-btn {
  margin-left: auto;
  float: right;
}
</style>
