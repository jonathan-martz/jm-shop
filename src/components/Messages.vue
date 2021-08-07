<template>
  <div class="vc-messages">{{ items }}</div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    items: function () {
      return this.$store.state.messages.items;
    },
  },
};
</script>
