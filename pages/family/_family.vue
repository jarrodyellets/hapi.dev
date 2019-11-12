<template>
  <div class="container">
    <FamilyNav
      :moduleAPI="moduleAPI"
      :menu="getMenu"
      :version="getVersion"
      :versions="versionsArray"
      :results="results"
      :indexResults="indexResults"
      :search="search"
      @search="onChildSearch"
      @previous="onChildIndex"
      @next="onChildIndex"
      @input="onChildInput"
    />
    <div class="tutorial-markdown-window">
      <Install :name="name" :moduleAPI="moduleAPI" :version="version" />
      <FamilyDisplay :display="getDisplay" />
    </div>
  </div>
</template>

<script>
import FamilyDisplay from "~/components/family/FamilyDisplay.vue";
import FamilyNav from "~/components/family/FamilyNav.vue";
import Install from "~/components/family/Install.vue";
let Toc = require("markdown-toc");
let Semver = require("semver");
let DomParser = require("dom-parser");

export default {
  components: {
    FamilyDisplay,
    FamilyNav,
    Install
  },
  head() {
    return {
      title: "hapi.dev - " + this.$route.params.family + " v" + this.getVersion,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "View the APIs for the hapi modules"
        }
      ]
    };
  },
  data() {
    return {
      display: "",
      modules: this.modules,
      version: "",
      menu: "",
      name: this.$route.params.family,
      indexResults: 0,
      search: "",
      results: [],
      uls: {},
      links: {}
    };
  },
  methods: {
    goToAnchor() {
      let hash = document.location.hash;
      if (hash != "") {
        setTimeout(function() {
          if (location.hash) {
            window.scrollTo(0, 0);
            window.location.href = hash;
          }
        }, 1);
      } else {
        return false;
      }
    },
    onChildSearch() {
      let headlines = [];
      let text = [];
      this.indexResults = 0;
      const headers = ["H2", "H3", "H4", "H5", "H6"];
      let pages = document
        .querySelector(".family-markdown-wrapper")
        .querySelectorAll("*");

      //Check if search item is in a headline
      for (let page of pages) {
        if (
          headers.indexOf(page.nodeName) !== -1 &&
          page.innerHTML.indexOf(this.search.toLowerCase()) !== -1
        ) {
          headlines.push(page);
        } else if (
          headers.indexOf(page.nodeName) === -1 &&
          page.innerHTML.indexOf(this.search.toLowerCase()) !== -1
        ) {
          text.push(page);
        }
      }

      this.results = headlines.concat(text);
      if (this.results.length) {
        document
          .querySelector(".family-search-results")
          .classList.add("nav-display");
        window.scrollTo(0, this.results[this.indexResults].offsetTop + 200);
      } else if (this.results.length === 0) {
        document
          .querySelector(".family-search-error")
          .classList.add("nav-display");
      }
    },
    onChildIndex(value) {
      this.$data.indexResults = value;
      window.scrollTo(0, this.results[this.indexResults].offsetTop);
    },
    onChildInput(value) {
      this.$data.search = value;
    },
    setClasses() {
      //Set TOC classes
      let anchors = document.querySelectorAll(".family-nav-select-wrapper a");
      let code = document.querySelectorAll(".family-nav-select-wrapper a code");
      let headers = document.querySelectorAll("h1, h2, h3, h4, h5");
      let nextUntil = function(elem) {
        // Setup siblings array
        let siblings = [];

        // Get the next sibling element
        elem = elem.nextElementSibling;

        // As long as a sibling exists
        while (elem) {
          // If we've reached our match, bail
          if (elem.matches("h1, h2, h3, h4, h5")) break;

          // Otherwise, push it to the siblings array
          siblings.push(elem);

          // Get the next sibling element
          elem = elem.nextElementSibling;
        }

        return siblings;
      };

      //Set TS doc classes
      if (this.moduleAPI[this.$route.params.family].types[this.getVersion]) {
        for (let head of headers) {
          let wrapper = document.createElement("div");
          let id = head.innerText
            .replace(/\(.*\)/g, "")
            .replace(/\s/gm, "")
            .replace(/\./gm, "")
            .replace("?", "")
            .replace("await", "")
            .toLowerCase()
            .replace(this.$route.params.family, "");
          wrapper.setAttribute("class", "module-item-wrapper");
          wrapper.setAttribute("id", id);
          let elements = nextUntil(head);
          if (elements.length > 0) {
            elements[0].before(wrapper);
            elements.forEach(x => wrapper.append(x));
          }
          let ul = document.querySelector("#" + id + " ul");
          if (
            id in
            this.moduleAPI[this.$route.params.family].types[this.getVersion]
          ) {
            if (
              document.querySelector("#" + id + " p") &&
              !document.querySelector("#" + id + " p").previousElementSibling
            ) {
              document.querySelector(
                "#" + id + " p"
              ).outerHTML = this.moduleAPI[this.$route.params.family].types[
                this.getVersion
              ][id];
            } else {
              wrapper.insertAdjacentHTML(
                "afterbegin",
                this.moduleAPI[this.$route.params.family].types[
                  this.getVersion
                ][id]
              );
            }
            if (ul) {
              ul.outerHTML = "";
            }
            let newAnchors = document.querySelectorAll("#" + id + " a");
            for (let a of newAnchors) {
              a.outerHTML = "<span>" + a.innerText + "</span>";
            }
          }
        }
      }

      for (let link of anchors) {
        link.classList.add("family-anchor");
        this.links[link.hash] = link.getBoundingClientRect().top;
        link.addEventListener("click", function(event) {
          if (
            link.parentElement.children[1] &&
            link.parentElement.children[1].classList.contains(
              "family-ul-display"
            )
          ) {
            link.parentElement.children[1].classList.remove(
              "family-ul-display"
            );
            link.classList.remove("family-minus");
            link.classList.add("family-plus");
          } else if (
            link.parentElement.children[1] &&
            !link.parentElement.children[1].classList.contains(
              "family-ul-display"
            )
          ) {
            link.parentElement.children[1].classList.add("family-ul-display");
            link.classList.remove("family-plus");
            link.classList.add("family-minus");
          }
        });
      }

      for (let c of code) {
        c.classList.add("family-code");
      }

      let familyUls = document.querySelectorAll(
        ".family-nav-select-wrapper > ul ul"
      );

      for (let ul of familyUls) {
        this.uls[ul.getBoundingClientRect().top] = {
          name: ul,
          top: ul.getBoundingClientRect().top,
          bottom: ul.getBoundingClientRect().bottom
        };
      }

      let links = document.querySelectorAll(
        "#" + this.$route.params.family + " a"
      );
      let points = {};
      let offsets = [];
      for (let i = 0; i < links.length; i++) {
        let point = document.querySelector(
          `.tutorial-markdown-window h1 a[href*='${links[i].href.replace(
            /^[^_]*#/,
            ""
          )}'],
          .tutorial-markdown-window h2 a[href*='${links[i].href.replace(
            /^[^_]*#/,
            ""
          )}'], .tutorial-markdown-window h3 a[href*='${links[i].href.replace(
            /^[^_]*#/,
            ""
          )}'], .tutorial-markdown-window h4 a[href*='${links[i].href.replace(
            /^[^_]*#/,
            ""
          )}'], .tutorial-markdown-window h5 a[href*='${links[i].href.replace(
            /^[^_]*#/,
            ""
          )}']`
        );
        if (point) {
          if (point.id) {
            points[point.offsetTop + 220] = {
              name: "#" + point.id
            };
          } else {
            points[point.offsetTop + 220] = {
              name: point.hash
            };
          }

          offsets.push(point.offsetTop + 220);
        }
      }
      offsets = [...new Set(offsets)];

      let currentElement = document.querySelector(".markdown-wrapper");

      for (let ul of familyUls) {
        ul.parentNode.children[0].classList.remove("family-minus");
        ul.parentNode.children[0].classList.add("family-plus");
        ul.classList.add("family-hide");
      }

      let that = this;

      //Add active class to elements on scroll
      window.onscroll = function() {
        let location = document.documentElement.scrollTop;
        let locationBody = document.body.scrollTop;
        let actives = document.getElementsByClassName("family-active");
        let active;
        let element;
        let i = 0;
        for (i in offsets) {
          if (offsets[i] <= location || offsets[i] <= locationBody) {
            let aClass = points[offsets[i]].name;
            for (let active of actives) {
              active.classList.remove("family-active");
            }
            element = document.querySelector(
              `.side-nav-wrapper a[href*='${aClass}']`
            );
            if (element && element.children.length !== 0) {
              document
                .querySelector(`a[href*='${aClass}']`)
                .classList.add("family-active");
              active = document.querySelector(".family-active");
            } else if (element && element.children.length === 0) {
              document
                .querySelector(`a[href*='${aClass}']`)
                .classList.add("family-active");
              active = document.querySelector(".family-active");
            }
          }
        }

        if (active) {
          let activeClass;
          let bottom = active.getBoundingClientRect().bottom;
          if (bottom > window.innerHeight) {
            element.scrollIntoView(false);
          }
          activeClass = active.hash;
          let activeLink = document.querySelector(`a[href*='${activeClass}']`);
          let activePosition = that.links[activeLink.hash];
          for (let key in that.uls) {
            if (
              activePosition >= that.uls[key].top &&
              activePosition < that.uls[key].bottom
            ) {
              that.uls[key].name.classList.add("family-ul-display");
              that.uls[key].name.parentElement.children[0].classList.remove(
                "family-plus"
              );
              that.uls[key].name.parentElement.children[0].classList.add(
                "family-minus"
              );
            }
          }
          if (that.$route.hash === active.hash && bottom === 0) {
            active.scrollIntoView(false);
          }
        }
      };
    }
  },
  computed: {
    getDisplay() {
      return this.moduleAPI[this.$route.params.family].displays[
        this.getVersion
      ];
    },
    getVersion() {
      return this.$store.getters.loadVersion;
    },
    getMenu() {
      return this.moduleAPI[this.$route.params.family].menus[this.getVersion];
    }
  },
  async asyncData({ params, $axios, route, store }) {
    const options = {
      headers: {
        accept: "application/vnd.github.v3.raw+json",
        authorization: "token " + process.env.GITHUB_TOKEN
      }
    };
    let parser = new DomParser();
    let heads;
    let moduleAPI = {};
    let api;
    let apiTestHTML;
    const types = ["hoek"];
    moduleAPI[params.family] = {
      menus: {},
      displays: {},
      versions: {},
      types: {}
    };
    let version = "";
    let versionsArray = [];

    if (store.getters.loadModules.includes(params.family)) {
      try {
        let branches = await $axios.$get(
          "https://api.github.com/repos/hapijs/" + params.family + "/branches",
          options
        );

        for (let branch of branches) {
          if (branch.name.match(/^v+[0-9]+|\bmaster\b/g)) {
            const apiPackage = await $axios.$get(
              "https://api.github.com/repos/hapijs/" +
                params.family +
                "/contents/package.json?ref=" +
                branch.name,
              options
            );
            if (!versionsArray.includes(apiPackage.version)) {
              moduleAPI[params.family].versions[apiPackage.version] =
                branch.name;
              await versionsArray.push(apiPackage.version);
            }
            if (apiPackage.types) {
              moduleAPI[params.family].types[apiPackage.version] = {};
            }
          }
        }
        for (let apiVersion of versionsArray) {
          api = await $axios.$get(
            "https://api.github.com/repos/hapijs/" +
              params.family +
              "/contents/API.md?ref=" +
              moduleAPI[params.family].versions[apiVersion],
            options
          );

          let rawString = await api.toString();

          //Auto generate TOC
          let apiTocString = "";
          let apiTocArray = await rawString.match(/\n#.+/g);

          for (let i = 0; i < apiTocArray.length; ++i) {
            apiTocString = apiTocString + apiTocArray[i];
          }
          let finalMenu = Toc(apiTocString, { bullets: "-" }).content;

          //Split API menu from content
          let finalDisplay = await rawString.replace(/\/>/g, "></a>");
          finalMenu = await finalMenu.replace(/Boom\./g, "");
          finalMenu = await finalMenu.replace(/\(([^#\*]+)\)/g, "()");
          const apiHTML = await $axios.$post(
            "https://api.github.com/markdown",
            {
              text: finalDisplay,
              mode: "markdown"
            },
            {
              headers: {
                authorization: "token " + process.env.GITHUB_TOKEN
              }
            }
          );

          //Add Typescript Docs
          if (
            store.getters.loadTypes.includes(params.family) &&
            (moduleAPI[params.family].types[apiVersion] ||
              moduleAPI[params.family].versions[apiVersion] === "master")
          ) {
            moduleAPI[params.family].types[apiVersion] = {};

            // Get Modules and Interfaces
            let typesFile = await $axios.$get(
              "https://hapi-tsdocs.netlify.com/type-docs/modules/_" +
                params.family +
                "_" +
                apiVersion.replace(/\./g, "_") +
                "_index_d_.md"
            );
            typesFile = typesFile + "#";
            let moduleList = await typesFile.match(
              /###\WModules([\s\S]*?)(?=#)/gm
            );
            if (moduleList) {
              let modules = moduleList[0].match(/\*(.*)/g);
              for (let m of modules) {
                let fileName = m.match(/_(.*).md/);
                let moduleMD = await $axios.$get(
                  "https://hapi-tsdocs.netlify.com/type-docs/modules/" +
                    fileName[0]
                );
                moduleMD = moduleMD + "##";
                let interfaces = moduleMD.match(
                  /###\WInterfaces([\s\S]*?)(?=$)/g
                );
                let modSnippet = moduleMD.match(/▸([\s\S]*?)(?=##)/gm);
                if (modSnippet) {
                  for (let mod of modSnippet) {
                    let methods = mod.match(/▸.*\s*:\s.*/gm);
                    let finalMethods = mod;
                    let methodClassStart = "<pre class='method'>";
                    let methodClassEnd = "</pre>";
                    for (let method of methods) {
                      let formattedMethod = method
                        .replace(/[▸`\*.]/g, "")
                        .replace(/</, "&lt;")
                        .replace(/>/, "&gt;");
                      let linkText = formattedMethod.match(
                        /(?<=\[)[^\]](.*)(?=])/
                      );
                      if (linkText) {
                        formattedMethod =
                          methodClassStart
                            .concat(formattedMethod)
                            .replace(/\[[^\]](.*?)\)/, linkText[0]) +
                          methodClassEnd;
                        finalMethods = finalMethods.replace(
                          method,
                          formattedMethod
                        );
                      } else {
                        formattedMethod =
                          methodClassStart.concat(formattedMethod) +
                          methodClassEnd;
                        finalMethods = finalMethods.replace(
                          method,
                          formattedMethod
                        );
                      }
                    }
                    let finalInter = "";
                    let interfaceTitle = "";
                    if (interfaces) {
                      for (let i of interfaces) {
                        let interfaceName = i.match(/(?=_)(.*)(?=\))/g);
                        let interfaceFile = await $axios.$get(
                          "https://hapi-tsdocs.netlify.com/type-docs/interfaces/" +
                            interfaceName[0]
                        );
                        interfaceTitle =
                          "**" +
                          interfaceFile.match(/(?<=#\WInterface:\W)(.*)/g)[0] +
                          "**:";
                        interfaceFile = interfaceFile + "#";
                        let interSnippet = interfaceFile.match(
                          /•\W\*\*([\s\S]*?)(?=#)/gm
                        );
                        let interfaceMethods = interfaceFile.match(
                          /▸([\s\S]*?)(?=#)/gm
                        );
                        if (interSnippet) {
                          for (let snippet of interSnippet) {
                            let defaultValue = snippet.match(
                              /(?<=\*\*`default`\*\*.)([^\s]+)/gm
                            );
                            if (!defaultValue) {
                              defaultValue = [null];
                            }
                            finalInter =
                              finalInter +
                              snippet
                                .replace(/\*\*\`/gm, "")
                                .replace(/•/gm, "")
                                .replace(/\`\*\*/gm, "")
                                .replace(/(\s\*)(?=\w)/gm, "  `")
                                .replace(/(?<=\w)(\*$)/gm, "`")
                                .replace(
                                  /(?<=default)(.[^\s]+)/gm,
                                  ": `" + defaultValue[0] + "`"
                                );
                          }
                        }
                        if (interfaceMethods) {
                          let finalMethods = "";
                          let title = "";
                          for (let interfaceMethod of interfaceMethods) {
                            title = interfaceMethod.match(
                              /(?<=▸\W\*\*)(.*)(?=\*\*)/g
                            );
                            if (title) {
                              title = title[0].toLowerCase();
                            } else {
                              title = interfaceFile
                                .match(/(?<=#\WInterface:\W)(.*)/g)[0]
                                .toLowerCase();
                            }
                            let methodClassStart = "<pre class='method'>";
                            let methodClassEnd = "</pre>";
                            let functionMethod = interfaceMethod.match(
                              /▸.*\s*:\s.*/gm
                            );
                            let functionNoHeader = interfaceMethod
                              .replace(/\###.+/g, "")
                              .replace(/(?<=▪\W)(\*\*)/gm, "")
                              .replace(/(?<=▪\W\w*)(\*\*)/gm, "")
                              .replace(/▪/gm, "");
                            for (let i = 0; i < functionMethod.length; ++i) {
                              let formatMethod = functionMethod[i]
                                .replace(/▸/gm, "")
                                .replace(/[▸`\*.]/g, "")
                                .replace(/</, "&lt;")
                                .replace(/>/, "&gt;");
                              let linkText = functionMethod[i].match(
                                /(?<=\[)[^\]](.*)(?=])/
                              );
                              if (linkText) {
                                let wrappedFunction =
                                  methodClassStart.concat(
                                    formatMethod.replace(
                                      /\[[^\]](.*?)\)/,
                                      linkText[0]
                                    )
                                  ) + methodClassEnd;
                                finalMethods = functionNoHeader.replace(
                                  functionMethod[i],
                                  wrappedFunction
                                );
                              } else {
                                let wrappedFunction =
                                  methodClassStart.concat(formatMethod) +
                                  methodClassEnd;
                                finalMethods = functionNoHeader.replace(
                                  functionMethod[i],
                                  wrappedFunction
                                );
                              }
                            }
                            const interfaceMethodHTML = await $axios.$post(
                              "https://api.github.com/markdown",
                              {
                                text: finalMethods
                                  .replace(/(?<=▪\W)(\*\*)/gm, "")
                                  .replace(/(?<=▪\W\w*)(\*\*)/gm, "")
                                  .replace(/▪/gm, ""),
                                mode: "markdown"
                              },
                              {
                                headers: {
                                  authorization:
                                    "token " + process.env.GITHUB_TOKEN
                                }
                              }
                            );
                            moduleAPI[params.family].types[apiVersion][
                              title
                            ] = await interfaceMethodHTML;
                          }
                        }
                      }
                    }
                    const modHTML = await $axios.$post(
                      "https://api.github.com/markdown",
                      {
                        text:
                          finalMethods
                            .replace(/(?<=▪\W)(\*\*)/gm, "")
                            .replace(/(?<=▪\W\w*)(\*\*)/gm, "")
                            .replace(/▪/gm, "") +
                          `<br>` +
                          interfaceTitle +
                          `<br><br>` +
                          finalInter +
                          `<br><br>`,
                        mode: "markdown"
                      },
                      {
                        headers: {
                          authorization: "token " + process.env.GITHUB_TOKEN
                        }
                      }
                    );
                    let moduleName = m.match(/(?<=\[)(.*)(?=\])/);
                    moduleAPI[params.family].types[apiVersion][
                      moduleName[0].toLowerCase()
                    ] = modHTML;
                  }
                }
              }
            }

            //Get Functions
            let functions = await $axios.$get(
              "https://hapi-tsdocs.netlify.com/type-docs/modules/_" +
                params.family +
                "_" +
                apiVersion.replace(/\./g, "_") +
                "_index_d_.md",
              options
            );
            functions = functions + "___";
            let functionSnippets = functions.match(
              /###\W\W[a-z]([\s\S]*?)(?=___)/gm
            );
            if (functionSnippets) {
              for (let f of functionSnippets) {
                let finalInter = "";
                let interfaces = {};
                let title = f
                  .match(/\###.+/g)[0]
                  .substring(5)
                  .toLowerCase();
                let linkText = f.match(/(?<=\[)[^\]](.*?)(?=])/g);
                let links = f.match(/\[[^\]](.*?)\)/g);
                let methodClassStart = "<pre class='method'>";
                let methodClassEnd = "</pre>";
                let functionMethod = f.match(/▸.*\s*:\s.*/gm);
                let functionNoHeader = f
                  .replace(/\###.+/g, "")
                  .replace(/(?<=▪\W)(\*\*)/gm, "")
                  .replace(/(?<=▪\W\w*)(\*\*)/gm, "")
                  .replace(/▪/gm, "");
                for (let i = 0; i < functionMethod.length; ++i) {
                  let noLinks = functionMethod[i];
                  if (linkText) {
                    for (let j = 0; j < linkText.length; ++j) {
                      if (
                        !(linkText[j] in interfaces) &&
                        links[j].slice(-4) === ".md)"
                      ) {
                        interfaces[linkText[j]] = links[j];
                      }
                      functionMethod[i] = await functionMethod[i].replace(
                        links[j],
                        linkText[j]
                      );
                    }
                  }
                  for (let key in interfaces) {
                    let interfaceFile = interfaces[key].match(
                      /(?=_)(.*)(?=\))/g
                    );
                    for (let file of interfaceFile) {
                      let interfaceCode = await $axios.$get(
                        "https://hapi-tsdocs.netlify.com/type-docs/interfaces/" +
                          file
                      );
                      let end = interfaceFile.pop() === file ? `<br><br>` : "";
                      let interfaceTitle =
                        "**" +
                        interfaceCode.match(/(?<=#\WInterface:\W)(.*)/g)[0] +
                        "**:";
                      interfaceCode = interfaceCode + "___";
                      let interSnippet = interfaceCode.match(
                        /•\W\*\*([\s\S]*?)(?=___)/gm
                      );
                      let interfaceMethods = interfaceCode.match(
                        /▸([\s\S]*?)(?=#)/gm
                      );
                      if (interSnippet) {
                        finalInter =
                          finalInter +
                          '\n\n' +
                          "**" +
                          key +
                          "**:" +
                          `<br><br>`;
                        for (let snippet of interSnippet) {
                          let defaultValue = snippet.match(
                            /(?<=\*\*`default`\*\*.)([^\s]+)/gm
                          );
                          if (!defaultValue) {
                            defaultValue = [null];
                          }
                          finalInter =
                            finalInter +
                            snippet
                              .replace(/\*\*\`/gm, "")
                              .replace(/•/gm, "")
                              .replace(/\`\*\*/gm, "")
                              .replace(/(\s\*)(?=\w)/gm, "  `")
                              .replace(/(?<=\w)(\*$)/gm, "`")
                              .replace(
                                /(?<=default)(.[^\s]+)/gm,
                                ": `" + defaultValue[0] + "`"
                              );
                        }
                      }
                    }
                  }
                  let wrappedFunction =
                    (await methodClassStart.concat(
                      functionMethod[i]
                        .replace(/▸/gm, "")
                        .replace(/[▸`\*.]/g, "")
                        .replace(/</, "&lt;")
                        .replace(/>/, "&gt;")
                    )) + methodClassEnd;
                  functionNoHeader = functionNoHeader.replace(
                    noLinks,
                    wrappedFunction
                  );
                }
                console.log("<div>" + functionNoHeader + "</div>" +
                      finalInter)
                const functionHTML = await $axios.$post(
                  "https://api.github.com/markdown",
                  {
                    text:
                      "<div>" + functionNoHeader + "</div>" +
                      finalInter,
                    mode: "markdown"
                  },
                  {
                    headers: {
                      authorization: "token " + process.env.GITHUB_TOKEN
                    }
                  }
                );
                moduleAPI[params.family].types[apiVersion][
                  title
                ] = await functionHTML;
              }
            }
          }

          //Set final API display and menu
          let apiString = await apiHTML.toString();
          let finalHtmlDisplay = await apiString.replace(/user-content-/g, "");
          moduleAPI[params.family].menus[apiVersion] = await finalMenu;
          moduleAPI[params.family].displays[
            apiVersion
          ] = await finalHtmlDisplay;
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    versionsArray = await versionsArray.sort((a, b) => Semver.compare(b, a));

    return { moduleAPI, version, versionsArray };
  },
  created() {
    if (!this.$store.getters.loadModules.includes(this.$route.params.family)) {
      return this.$nuxt.error({ statusCode: 404 });
    }
    let version = this.versionsArray.includes(this.$route.query.v)
      ? this.$route.query.v
      : this.versionsArray[0];
    this.$data.name = this.$route.params.family;
    this.$store.commit("setDisplay", "family");
    this.$store.commit("setVersion", version);
    (!this.$route.query.v ||
      !this.versionsArray.includes(this.$route.query.v)) &&
      this.$router.push({
        path: this.$route.path,
        query: { v: this.versionsArray[0] },
        hash: this.$route.hash
      });
    this.$data.menu = this.moduleAPI[this.$route.params.family].menus[
      this.getVersion
    ];
  },
  mounted() {
    console.log(this.moduleAPI);
    this.setClasses();
    this.goToAnchor();
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/main.scss";
@import "../../assets/styles/api.scss";
@import "../../assets/styles/markdown.scss";
@import "../../assets/styles/family.scss";

.family-title {
  margin: 20px 0 -16px 100px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid $dark-white;
  display: inline-block;
}

.family-anchor {
  display: inline-block;
  color: $gray;
  font-size: 0.85em;
  height: 100%;
  width: 100%;
  padding: 2px 0;
}

.family-anchor:hover {
  color: $gray;
}

.family-code {
  background: $off-white;
  color: $gray;
  font-family: "Lato", sans-serif;
  font-size: 1em;
  padding: 0;
  border: none;
}

.family-plus,
.family-minus,
.family-plus code,
.family-minus code {
  position: relative;
  color: $orange;
  text-decoration: none;
}

.family-plus:hover,
.family-minus:hover {
  color: $orange;
}

.family-plus:after {
  content: "\002B";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 20px;
  top: 0;
  bottom: 0;
  left: -17px;
  height: 31px;
  width: 15px;
  z-index: 100;
}

.family-minus:after {
  content: "\2212";
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 20px;
  top: 0;
  bottom: 0;
  left: -17px;
  height: 31px;
  width: 15px;
  z-index: 100;
}

.family-active,
.family-active * {
  position: relative;
  color: #fff !important;
  background: $gray !important;
  height: 31px;
}

.family-active {
  display: inline-block;
  left: -70px;
  padding: 2px 30px 2px 70px !important;
  width: 402px !important;
  overflow-wrap: break-word;
}

.family-active:after {
  position: absolute;
  left: 53px;
  height: 31px;
}

.family-hide {
  display: none;
}

.family-ul-display {
  display: block !important;
}

.module-item-wrapper {
  padding-top: 1em;
}

.module-item-wrapper table {
  margin: 0;
  border: 2px solid $dark-white;
}

.module-item-wrapper thead {
  background-color: $off-white;
  border-bottom: 1px solid $dark-white;
}

.module-item-wrapper th {
  text-align: center;
}

.module-item-wrapper th,
.module-item-wrapper td {
  padding: 5px 15px;
  vertical-align: middle;
}

.module-item-wrapper tr,
.module-item-wrapper table code {
  border: 1px solid $dark-white;
}

.module-item-wrapper > p {
  font-size: 1.1em;
}

.module-item-wrapper code {
  font-family: "inconsolata", menlo, consolas, monospace;
  padding: 0.2rem 0.33rem;
  color: #6f6f6f;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
}

.module-item-wrapper table {
  margin-bottom: 1em;
}

.module-item-wrapper > div {
  font-size: 1.1em;
  margin-bottom: 0px;
}

br {
  height: 1em;
}

hr {
  height: 1px;
  width: 200px;
  background-color: $dark-white;
}

h1 a {
  display: block;
  position: relative;
  top: -116px;
  visibility: hidden;
}

@media screen and (max-width: 900px) {
  .ecosystem-title {
    margin: 20px 0 0 0;
    padding-bottom: 16px;
  }
}
</style>