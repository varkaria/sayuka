<template>
  <div
    class="flex justify-center mx-auto mb-2 transition-all filter"
    :class="{ 'safe-mode': $store.state.doujin.safemode }"
  >
    <img
      class="rounded-md"
      :src="`https://api.varkaria.tech/get_image/${img.m_id}/${img.m_file}`"
    >
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    img: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="css" scope>
.img-data {
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
}

.blank-img-data {
  max-width: 100%;
  display: block;
  margin: 0px;
  border: none;
  padding: 0px;
}

.card-img {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
}

.blank {
  box-sizing: border-box;
  display: block;
  max-width: 100%;
}

.safe-mode {
  filter: blur(5px);
}
</style>
