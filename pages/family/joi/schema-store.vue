<template>
  <div class="container">
    <LandingNav
      :moduleAPI="moduleAPI"
      :intro="intro"
      :example="example"
      :usage="usage"
      :faq="faq"
      :page="page"
      :advanced="advanced"
    />
    <div class="store-wrapper">
      <h1 class="store-title">joi Schema Store</h1>
    </div>
  </div>
</template>

<script>
import LandingNav from "~/components/family/LandingNav.vue";
const moduleInfo = require("../../../static/lib/moduleInfo.json");

export default {
  components: {
    LandingNav
  },
  head() {
    return {
      title: "hapi.dev - joi Schema Store",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Find joi schemas"
        }
      ]
    };
  },
  data() {
    return {
      moduleAPI: moduleInfo,
      page: "schema-store",
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false
    };
  },
  created() {
    let versionsArray = this.moduleAPI.joi.versionsArray;
    this.$store.commit("setDisplay", "family");
    this.$store.commit("setFamily", "joi");
    if (this.moduleAPI.joi[versionsArray[0]].intro) {
      this.$store.commit("setIntro", true);
    }
    if (this.moduleAPI.joi[versionsArray[0]].example) {
      this.$store.commit("setExample", true);
    }
    if (this.moduleAPI.joi[versionsArray[0]].usage) {
      this.$store.commit("setUsage", true);
    }
    if (this.moduleAPI.joi[versionsArray[0]].faq) {
      this.$store.commit("setFaq", true);
    }
    if (this.moduleAPI.joi[versionsArray[0]].advanced) {
      this.$store.commit("setAdvanced", true);
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/styles/main.scss";
@import "codemirror/lib/codemirror.css";
@import "codemirror/theme/eclipse.css";

.store-wrapper {
  width: 100%;
  margin: 0;
  padding: 20px 40px;
}

.store-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
