<template>
  <div class="ads-wrapper">
    <img src="/img/hapi.svg" alt="helmet" class="ad-helmet" />
    <div class="ad-text-wrapper">
      <p class="bold ad-bold">{{ads.ads[num].bold}}</p>
      <p class="ad-text">{{ads.ads[num].text}}</p>
    </div>
  </div>
</template>

<script>
const ads = require("../static/lib/ads.js");

export default {
  data() {
    return {
      num: 0,
      ads: ads
    };
  },
  created() {
    this.num = Math.floor(Math.random() * 3) + 1;
    console.log(this.num);
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

.ads-wrapper {
  width: 100%;
  background: #fff;
  border: 1px solid $dark-white;
  margin-top: 15px;
  padding: 10px;
}

.ad-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ad-bold {
  font-size: 1.5em;
  color: $orange;
  border-bottom: 2px solid $orange;
}

.ad-helmet {
  width: 80px;
}
</style>