<template>
  <button
    type="text"
    :style="[
      {
        backgroundColor: backColor,
        color: fontColor,
      },
      FontStyle,
    ]"
    @click="active(value)"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    {{ message }}
  </button>
</template>

<script>
import Store from "../models/appModel";
export default {
  props: {
    message: {
      default: "click",
    },
    value: {
      default: null,
    },
    palette: {
      default: {
        base: "gray",
        hover: "lightgray",
      },
    },
    fontPalette: {
      default: {
        base: "white",
        hover: "white",
      },
    },
    isActive: { default: true },
  },
  data: function () {
    return {
      isHover: false,
      FontStyle: Store.state.theme.FontStyle,
    };
  },
  computed: {
    backColor: function () {
      return this.isHover ? this.palette.hover : this.palette.base;
    },
    fontColor: function () {
      return this.isHover ? this.fontPalette.hover : this.fontPalette.base;
    },
  },
  methods: {
    active(val) {
      this.$emit("active", val);
    },
  },
};
</script>

<style scoped></style>
