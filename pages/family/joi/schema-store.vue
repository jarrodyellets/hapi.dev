<template>
  <no-ssr>
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
        <div class="store-list-wrapper">
          <div
            v-for="schema in schemas.schemaStore"
            v-bind:key="schema.link"
            class="store-list-name"
          >
            <div class="store-list-link" v-on:click="changeSchema(schema.link)">
              {{ schema.display }}
            </div>
          </div>
        </div>
        <h2 class="tester-subTitle">Schema:</h2>
        <codemirror
          :value="schema"
          :options="options"
          @input="onSchemaChange"
        ></codemirror>
        <div class="store-buttons">
          <button class="store-button" v-on:click="copySchema">Copy</button>
          <button class="store-button" v-on:click="sendSchema">
            Import to Schema Tester
          </button>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import LandingNav from "~/components/family/LandingNav.vue";
const moduleInfo = require("../../../static/lib/moduleInfo.json");
const schemas = require("../../../static/lib/schemaStore.js");
if (process.client) {
  require("codemirror/mode/javascript/javascript.js");
}
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
      advanced: false,
      schema: "//Schema goes here",
      schemas: schemas,
      options: {
        theme: "eclipse",
        tabSize: 2,
        mode: "text/javascript",
        lineNumbers: true,
        lineWrapping: true,
        addModeClass: true,
        readOnly: true
      }
    };
  },
  methods: {
    onSchemaChange(input) {
      this.$data.schema = input;
    },
    changeSchema(schema) {
      this.$data.schema =
        "//" +
        schemas.schemaStore[schema].display +
        " \n" +
        schemas.schemaStore[schema].schema;
    },
    copySchema() {
      const el = document.createElement("textarea");
      el.value = this.$data.schema;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    sendSchema() {
      this.$store.commit("setSchema", this.$data.schema);
      this.$store.commit(
        "setValidate",
        "//Insert data to validate here \n" + "{ \n" + " \n" + "}"
      );
      this.$router.push({
        path: "/family/joi/tester"
      });
    }
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

.store-list-wrapper {
  margin: 20px 0;
}

.store-list-link {
  cursor: pointer;
  color: #ed7d31;
  text-decoration: none;
  font-size: 1.1em;
  display: inline-block;
}

.store-list-link:hover {
  text-decoration: underline;
}

.tester-subTitle {
  font-size: 1.5em;
  margin-bottom: 5px;
  margin-top: 0 !important;
  padding-top: 0 !important;
  border: none !important;
}

.CodeMirror {
  background: $off-white;
  border: 1px solid $dark-white;
  width: 100%;
  margin-left: 0 !important;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: inconsolata, menlo, consolas, monospace !important;
  height: auto !important;
  margin-bottom: 20px;
}

.CodeMirror-scroll {
  max-height: 60vh;
}

.CodeMirror-sizer {
  border: none !important;
}

.cm-comment {
  color: $gray-light !important;
}

.cm-number {
  color: #1131cb !important;
}

.cm-string-2 {
  color: #fa0000 !important;
}

.cm-string {
  color: #28813f !important;
}

.store-button {
  border-radius: 10px;
  border: none;
  background: $orange;
  padding: 5px 15px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border: 4px solid rgba(0, 0, 0, 0);
  margin: 0 10px 50px 0;
  font-family: "Lato", sans-serif;
}

.store-button:hover {
  border: 4px solid $orange;
  background: #fff;
  color: $orange;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}
</style>
