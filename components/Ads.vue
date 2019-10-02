<template>
  <div class="ads-wrapper">
    <div class="ad-text-wrapper">
      <p class="bold ad-bold">{{getAd && getAd.bold}}</p>
      <div class="ad-line"></div>
      <p class="ad-text">{{getAd && getAd.text}}</p>
    </div>
    <div class="ad-button-wrapper">
      <a :href='getAd && getAd.link' class="ads-button">Learn More</a>
    </div>
  </div>
</template>

<script>
const ads = require("../static/lib/ads.js");

export default {
  data() {
    return {
      num: 3,
      ads: ads
    }
  },
  computed: {
    getAd() {
      return ads.ads[this.$store.getters.loadAdCounter]
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

.ads-wrapper {
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid $dark-white;
  margin-top: 15px;
  padding: 15px;
}

.ads-wrapper:after {
  content: "";
  background-image: url("/img/helmet.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(70%);
  opacity: 0.09;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

.ad-text-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  z-index: 1;
}

.ad-bold {
  font-size: 1.7em;
  color: $orange;
  margin: 0;
  width: 60%;
}

.ad-line {
  height: 2px;
  width: 30%;
  background: $dark-white;
  margin: 18px 0 10px 0;
}

.ad-text {
  font-weight: 700;
  width: 80%;
  line-height: 1.5;
  margin: 0;
}

.ad-button-wrapper {
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0 0 0;
  z-index: 1;
}

.ads-button {
  border-radius: 10px;
  border: none;
  background: $orange;
  padding: 5px 15px;
  font-size: 0.8em;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border: 4px solid rgba(0, 0, 0, 0);
  margin: 0;
}

.ads-button:hover {
  border: 4px solid $orange;
  background: #fff;
  color: $orange;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}
</style>