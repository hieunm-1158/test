<template>
  <div class="card">
    <div class="card-header">
      <slot name="image">
        <img class="ava" src="https://i.pravatar.cc/150?img=35" alt="Avatar" />
      </slot>
    </div>
    <div class="card-body">
      <slot name="name" text="hello world">Tao la me day.</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mother",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
