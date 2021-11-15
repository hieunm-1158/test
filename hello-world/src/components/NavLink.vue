<template>
  <ul>
    <li>
      <slot text="hello world" another-attribute="anotherAttribute"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ["Feed a cat", "Buy milk"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
