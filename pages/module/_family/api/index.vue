<template>
  <div class="container">
    <LandingNav
      :moduleInfo="moduleAPI"
      :menu="getMenu"
      :page="page"
      :version="getVersion"
      :versions="versionsArray"
      :results="results"
      :indexResults="indexResults"
      :search="search"
      :intro="intro"
      :example="example"
      :usage="usage"
      :faq="faq"
      :advanced="advanced"
      @clipboards="onClipboards"
      @search="onChildSearch"
      @previous="onChildIndex"
      @next="onChildIndex"
      @input="onChildInput"
    />
    <div class="tutorial-markdown-window">
      <h1 class="hapi-family-header">
        API
        <span class="api-version-span"
          >v{{ getVersion.match(/.*(?=\.)/)[0] }}.x</span
        >
      </h1>
      <Install :name="name" :moduleAPI="moduleAPI" :version="version" />
      <FamilyDisplay :display="getAPI" />
    </div>
    <div class="preload">
      <img src="/img/clipboardCheck.png" alt="clipboard" />
    </div>
  </div>
</template>

<script>
import FamilyDisplay from "~/components/family/FamilyDisplay.vue";
import LandingNav from "~/components/family/LandingNav.vue";
import Install from "~/components/family/Install.vue";
import Changelog from "~/components/resources/Changelog.vue";
const moduleInfo = require("../../../../static/lib/moduleInfo.json");
import { copyToClipboard, setCodeClipboards } from "~/utils/clipboard";
let Toc = require("markdown-toc");
let Semver = require("semver");
let DomParser = require('dom-parser');

export default {
  components: {
    FamilyDisplay,
    LandingNav,
    Install,
    Changelog
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
      moduleAPI: moduleInfo,
      versionsArray: moduleInfo[
        this.$route.params.family
      ].versionsArray.sort((a, b) => Semver.compare(b, a)),
      display: "",
      page: "api",
      modules: this.modules,
      version: "",
      menu: "",
      name: this.$route.params.family,
      indexResults: 0,
      search: "",
      results: [],
      uls: {},
      links: {},
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false,
      listeners: new Map()
    };
  },
  methods: {
    onClipboards() {
      let that = this;
      setTimeout(function() {
        that.setClipboards();
      }, 100);
      setCodeClipboards(that.listeners);
    },
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
        if (window.innerWidth <= 900) {
          document.body.scrollTo(
            0,
            this.results[this.indexResults].offsetTop + 166
          );
        } else {
          window.scrollTo(0, this.results[this.indexResults].offsetTop);
        }
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
    setClipboards() {
      let headers = document.querySelectorAll(
        ".family-markdown-wrapper h2, .family-markdown-wrapper h3, .family-markdown-wrapper h4, .family-markdown-wrapper h5, .changelog-wrapper h2"
      );

      for (let header of headers) {
        header.classList.add("api-doc-header");
        header.classList.add("api-main-doc-header", "tutorial-header");
        header.innerHTML =
          header.innerHTML +
          "<span class='api-clipboardCheck api-clipboard' title='Copy link to clipboard'></span>";
      }

      let clipboards = document.querySelectorAll(".api-clipboard");

      for (let clipboard of clipboards) {
        clipboard.addEventListener("click", function(event) {
          let copyLink = clipboard.parentNode.firstElementChild.href;
          copyToClipboard(copyLink);
          clipboard.classList.remove("api-clipboard");
          clipboard.classList.add("api-clipboardCheck");
          setTimeout(function() {
            clipboard.classList.add("api-clipboard");
            clipboard.classList.remove("api-clipboardCheck");
          }, 3000);
        });
      }
    },
    setClasses() {
      //Set TOC classes
      let anchors = document.querySelectorAll(".family-nav-select-wrapper a");
      let code = document.querySelectorAll(".family-nav-select-wrapper a code");

      for (let link of anchors) {
        link.classList.add("family-anchor");
        this.links[link.hash] = link.getBoundingClientRect().top;
        link.addEventListener("click", function(event) {
          let currentActive = document.querySelector(".family-active");
          if (currentActive) {
            currentActive.classList.remove("family-active");
          }
          link.classList.add("family-active");
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
          `.tutorial-markdown-window h1 a[href='${links[i].hash}'],
          .tutorial-markdown-window h2 a[href='${links[i].hash}'],
          .tutorial-markdown-window h3 a[href='${links[i].hash}'], 
          .tutorial-markdown-window h4 a[href='${links[i].hash}'],
           .tutorial-markdown-window h5 a[href='${links[i].hash}']`
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
        if (
          window.innerHeight + window.scrollY <
          document.body.offsetHeight + 96
        ) {
          for (i in offsets) {
            if (offsets[i] <= location || offsets[i] <= locationBody) {
              let aClass = points[offsets[i]].name;
              for (let active of actives) {
                active.classList.remove("family-active");
              }
              element = document.querySelector(
                `.side-nav-wrapper a[href='${aClass}']`
              );
              if (element && element.children.length !== 0) {
                document
                  .querySelector(`a[href='${aClass}']`)
                  .classList.add("family-active");
                active = document.querySelector(".family-active");
              } else if (element && element.children.length === 0) {
                document
                  .querySelector(`a[href='${aClass}']`)
                  .classList.add("family-active");
                active = document.querySelector(".family-active");
              }
            }
          }
        }

        if (active) {
          let activeClass;
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
          let bottom = active.getBoundingClientRect().bottom;
          if (bottom > window.innerHeight) {
            element.scrollIntoView(false);
          }
          if (that.$route.hash === active.hash && bottom === 0) {
            active.scrollIntoView(false);
          }
        }
      };
    }
  },
  computed: {
    getAPI() {
      return this.moduleAPI[this.$route.params.family][this.getVersion].api;
    },
    getVersion() {
      return this.$store.getters.loadVersion;
    },
    getMenu() {
      return this.moduleAPI[this.$route.params.family][this.getVersion].menu;
    }
  },


  async asyncData({ params, $axios, route, store }) {
    const options = {
      headers: {
        accept: 'application/vnd.github.v3.raw+json',
        authorization: 'token ' + process.env.GITHUB_TOKEN
      }
    };
    let parser = new DomParser();
    let heads;
    let moduleAPIs = {};
    let api;
    let apiTestHTML;
    const types = ['hoek'];
    moduleAPIs[params.family] = {
      menus: {},
      displays: {},
      versions: {},
      types: {}
    };
    let version = '';
    let versionsArray = [];
    if (params.family === "teamwork") {
      console.log("HEERHE")
      try {
          //Add Typescript Docs
            moduleAPIs[params.family].types['master'] = {};
            // Get Modules and Interfaces
            let typesFile = await $axios.$get(
              'http://localhost:3000/type-docs/modules/_teamwork_5_0_0_index_d_.md'
            );
            typesFile = typesFile + '#';
            let moduleList = await typesFile.match(/###\WModules([\s\S]*?)(?=#)/gm);
            let classList = await typesFile.match(/###\WClasses([\s\S]*?)(?=#)/gm);
            if (moduleList) {
              let modules = moduleList[0].match(/\*(.*)/g);
              for (let m of modules) {
                let fileName = m.match(/_(.*).md/);
                let moduleMD = await $axios.$get('http://localhost:3000/type-docs/modules/' + fileName[0]);
                moduleMD = moduleMD + '##';
                let interfaces = moduleMD.match(/###\WInterfaces([\s\S]*?)(?=$)/g);
                let modSnippet = moduleMD.match(/▸([\s\S]*?)(?=##)/gm);
                if (modSnippet) {
                  for (let mod of modSnippet) {
                    let methods = mod.match(/▸.*\s*:\s.*/gm);
                    let finalMethods = mod;
                    let methodClassStart = "<pre class='method'>";
                    let methodClassEnd = '</pre>';
                    for (let method of methods) {
                      let formattedMethod = method
                        .replace(/[▸`\*.]/g, '')
                        .replace(/</, '&lt;')
                        .replace(/>/, '&gt;');
                      let linkText = formattedMethod.match(/(?<=\[)[^\]](.*?)(?=])/g);
                      let links = formattedMethod.match(/\[[^\]](.*?)\)/g);
                      if (linkText) {
                        for (let j = 0; j < linkText.length; ++j) {
                          formattedMethod = formattedMethod.replace(links[j], linkText[j]);
                        }
                      }
                      finalMethods = finalMethods.replace(
                        method,
                        methodClassStart.concat(formattedMethod) + methodClassEnd
                      );
                    }
                    let finalInter = '';
                    let interfaceTitle = '';
                    if (interfaces) {
                      for (let i of interfaces) {
                        let interfaceName = i.match(/(?=_)(.*)(?=\))/g);
                        let interfaceFile = await $axios.$get(
                          'http://localhost:3000/type-docs/interfaces/' + interfaceName[0]
                        );
                        let iTitle = '**' + interfaceFile.match(/(?<=#\WInterface:\W)(.*)/g)[0] + '**:';
                        interfaceFile = interfaceFile + '#';
                        let interSnippet = interfaceFile.match(/•\W\*\*([\s\S]*?)(?=#)/gm);
                        interfaceTitle = interSnippet ? iTitle : '';
                        let interfaceMethods = interfaceFile.match(/▸([\s\S]*?)(?=#)/gm);
                        if (interSnippet) {
                          for (let snippet of interSnippet) {
                            let defaultValue = snippet.match(/(?<=\*\*`default`\*\*.)([^\s]+)/gm);
                            if (!defaultValue) {
                              defaultValue = [null];
                            }
                            finalInter =
                              finalInter +
                              snippet
                                .replace(/\*\*\`/gm, '')
                                .replace(/•/gm, '')
                                .replace(/\`\*\*/gm, '')
                                .replace(/(\s\*)(?=\w)/gm, '  `')
                                .replace(/(?<=\w)(\*$)/gm, '`')
                                .replace(/(?<=default)(.[^\s]+)/gm, ': `' + defaultValue[0] + '`');
                          }
                        }
                        if (interfaceMethods) {
                          let finalMethods = '';
                          let title = '';
                          for (let interfaceMethod of interfaceMethods) {
                            title = interfaceMethod.match(/(?<=▸\W\*\*)(.*)(?=\*\*)/g);
                            if (title) {
                              title = title[0].toLowerCase();
                            } else {
                              title = interfaceFile.match(/(?<=#\WInterface:\W)(.*)/g)[0].toLowerCase();
                            }
                            let methodClassStart = "<pre class='method'>";
                            let methodClassEnd = '</pre>';
                            let functionMethod = interfaceMethod.match(/▸.*\s*:\s.*/gm);
                            let functionNoHeader = interfaceMethod
                              .replace(/\###.+/g, '')
                              .replace(/(?<=▪\W)(\*\*)/gm, '')
                              .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                              .replace(/▪/gm, '');
                            for (let i = 0; i < functionMethod.length; ++i) {
                              let formatMethod = functionMethod[i]
                                .replace(/▸/gm, '')
                                .replace(/[▸`\*.]/g, '')
                                .replace(/</, '&lt;')
                                .replace(/>/, '&gt;');
                              let linkText = functionMethod[i].match(/(?<=\[)[^\]](.*)(?=])/);
                              if (linkText) {
                                let wrappedFunction =
                                  methodClassStart.concat(formatMethod.replace(/\[[^\]](.*?)\)/, linkText[0])) +
                                  methodClassEnd;
                                finalMethods = functionNoHeader.replace(functionMethod[i], wrappedFunction);
                              } else {
                                let wrappedFunction = methodClassStart.concat(formatMethod) + methodClassEnd;
                                finalMethods = functionNoHeader.replace(functionMethod[i], wrappedFunction);
                              }
                            }
                            const interfaceMethodHTML = await $axios.$post(
                              'https://api.github.com/markdown',
                              {
                                text: finalMethods
                                  .replace(/(?<=▪\W)(\*\*)/gm, '')
                                  .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                                  .replace(/▪/gm, ''),
                                mode: 'markdown'
                              },
                              {
                                headers: {
                                  authorization: 'token ' + process.env.GITHUB_TOKEN
                                }
                              }
                            );
                            moduleAPIs[params.family].types['master'][title] = await interfaceMethodHTML;
                          }
                        }
                      }
                    }
                    let finalInterfaces = interfaceTitle
                      ? `<br>` + interfaceTitle + `<br><br>` + finalInter + `<br><br>`
                      : null;
                    const modHTML = await $axios.$post(
                      'https://api.github.com/markdown',
                      {
                        text:
                          finalMethods
                            .replace(/(?<=▪\W)(\*\*)/gm, '')
                            .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                            .replace(/▪/gm, '') + finalInterfaces,
                        mode: 'markdown'
                      },
                      {
                        headers: {
                          authorization: 'token ' + process.env.GITHUB_TOKEN
                        }
                      }
                    );
                    let moduleName = m.match(/(?<=\[)(.*)(?=\])/);
                    moduleAPIs[params.family].types['master'][moduleName[0].toLowerCase()] = modHTML;
                  }
                }
              }
            }
            //Get Classes
            if (classList) {
              let classes = classList[0].match(/\*(.*)/g);
              let finalClass = '';
              for (let c of classes) {
                let title = '';
                let fileName = c.match(/_(.*).md/);
                let classMD = await $axios.$get('http://localhost:3000/type-docs/classes/' + fileName[0]);
                classMD = (await classMD) + '##';
                let constructor = await classMD.match(/(?<=###\W\Wconstructor\n)([\s\S]*?)(?=##\WMethods)/gm);
                classMD = classMD.replace("•", "▸")
                let methods = await classMD.match(/([\s\S]*?)(?=##)/gm);
                let classMethods = classMD.match(/▸([\s\S]*?)(?=##)/gm);
                if (constructor) {
                  let method = constructor[0].match(/\\.*\s*:\s.*/);
                  title = method[0]
                    .match(/(?<=\*\*)(.*)(?=\*\*)/)[0]
                    .replace(/\W/, '')
                    .toLowerCase();
                  let formatMethod = method[0]
                    .replace(/[\\+`\*.]/g, '')
                    .replace(/</, '&lt;')
                    .replace(/>/, '&gt;');
                  let linkText = formatMethod.match(/(?<=\[)[^\]](.*?)(?=])/g);
                  let links = formatMethod.match(/\[[^\]](.*?)\)/g);
                  let methodClassStart = "<pre class='method'>";
                  let methodClassEnd = '</pre>';
                  if (linkText) {
                    for (let j = 0; j < linkText.length; ++j) {
                      formatMethod = await formatMethod.replace(links[j], linkText[j]);
                    }
                  }
                  formatMethod = methodClassStart + formatMethod + methodClassEnd;
                  finalClass = constructor[0]
                    .replace(method[0], formatMethod)
                    .replace(/###.*/g, '')
                    .replace('## Properties', '<br>' + '**Properties**')
                    .replace(/•/gm, '')
                    .replace(/\`\*\*/gm, '')
                    .replace(/(:\s\*)(?=\w)/gm, '  `')
                    .replace(/(?<=`.*?)(\*$)/gm, '`');
                }
                const classHTML = await $axios.$post(
                  'https://api.github.com/markdown',
                  {
                    text: finalClass,
                    mode: 'markdown'
                  },
                  {
                    headers: {
                      authorization: 'token ' + process.env.GITHUB_TOKEN
                    }
                  }
                );
                moduleAPIs[params.family].types['master'][title] = await classHTML;
                console.log(classMethods)
                if (classMethods) {
                  let interfaces = {};
                  let finalMethods = '';
                  let classMethodTitle = '';
                  for (let classMethod of classMethods) {
                    classMethodTitle = classMethod.match(/(?<=▸\W\*\*)(.*?)(?=\*\*)/g);
                    if (classMethodTitle) {
                      classMethodTitle = classMethodTitle[0].toLowerCase();
                    } else {
                      classMethodTitle = classMD.match(/(?<=#\WInterface:\W)(.*)/g)[0].toLowerCase();
                    }
                    let methodClassStart = "<pre class='method'>";
                    let methodClassEnd = '</pre>';
                    let functionMethod = classMethod.match(/▸.*\s*:\s.*/gm);
                    let functionNoHeader = classMethod
                      .replace(/\###.+/g, '')
                      .replace(/(?<=▪\W)(\*\*)/gm, '')
                      .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                      .replace(/▪/gm, '');
                    for (let i = 0; i < functionMethod.length; ++i) {
                      let formatMethod = functionMethod[i]
                        .replace(/▸/gm, '')
                        .replace(/[▸`\*]/g, '')
                        .replace(/</, '&lt;')
                        .replace(/>/, '&gt;');
                      let linkText = functionMethod[i].match(/(?<=\[)[^\]](.*?)(?=])/g);
                      let links = formatMethod.match(/\[[^\]](.*?)\)/g);
                      if (linkText) {
                        for (let j = 0; j < linkText.length; ++j) {
                          if (
                            !(linkText[j] in interfaces) &&
                            links[j].slice(-4) === '.md)' &&
                            links[j].includes('/interfaces/')
                          ) {
                            interfaces[linkText[j]] = links[j];
                          }
                          formatMethod = formatMethod.replace(links[j], linkText[j]);
                        }
                      }
                      let wrappedFunction = methodClassStart.concat(formatMethod) + methodClassEnd;
                      finalMethods = functionNoHeader.replace(functionMethod[i], wrappedFunction);
                    }
                    const classMethodHTML = await $axios.$post(
                      'https://api.github.com/markdown',
                      {
                        text: finalMethods
                          .replace(/(?<=▪\W)(\*\*)/gm, '')
                          .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                          .replace(/▪/gm, ''),
                        mode: 'markdown'
                      },
                      {
                        headers: {
                          authorization: 'token ' + process.env.GITHUB_TOKEN
                        }
                      }
                    );
                    moduleAPIs[params.family].types['master'][classMethodTitle] = await classMethodHTML;
                  }
                }
              }
            }
            //Get Functions
            let functions = await $axios.$get(
              'http://localhost:3000/type-docs/modules/_teamwork_5_0_0_index_d_.md',
              options
            );
            functions = functions + '___';
            let functionSnippets = functions.match(/###\W\W[a-z]([\s\S]*?)(?=___)/gm);
            if (functionSnippets) {
              for (let f of functionSnippets) {
                let finalInter = '';
                let interfaces = {};
                let title = f
                  .match(/\###.+/g)[0]
                  .substring(5)
                  .toLowerCase();
                let linkText = f.match(/(?<=\[)[^\]](.*?)(?=])/g);
                let links = f.match(/\[[^\]](.*?)\)/g);
                let methodClassStart = "<pre class='method'>";
                let methodClassEnd = '</pre>';
                let functionMethod = f.match(/▸.*\s*:\s.*/gm);
                let functionNoHeader = f
                  .replace(/\###.+/g, '')
                  .replace(/(?<=▪\W)(\*\*)/gm, '')
                  .replace(/(?<=▪\W\w*)(\*\*)/gm, '')
                  .replace(/▪/gm, '');
                for (let i = 0; i < functionMethod.length; ++i) {
                  let noLinks = functionMethod[i];
                  if (linkText) {
                    for (let j = 0; j < linkText.length; ++j) {
                      if (
                        !(linkText[j] in interfaces) &&
                        links[j].slice(-4) === '.md)' &&
                        links[j].includes('/interfaces/')
                      ) {
                        interfaces[linkText[j]] = links[j];
                      }
                      functionMethod[i] = await functionMethod[i].replace(links[j], linkText[j]);
                    }
                  }
                  for (let key in interfaces) {
                    let interfaceFile = interfaces[key].match(/(?=_)(.*)(?=\))/g);
                    for (let file of interfaceFile) {
                      let interfaceCode = await $axios.$get(
                        'http://localhost:3000/type-docs/interfaces/' + file
                      );
                      let end = interfaceFile.pop() === file ? `<br><br>` : '';
                      let interfaceTitle = '**' + interfaceCode.match(/(?<=#\WInterface:\W)(.*)/g)[0] + '**:';
                      interfaceCode = interfaceCode + '___';
                      let interSnippet = interfaceCode.match(/•\W\*\*([\s\S]*?)(?=___)/gm);
                      let interfaceMethods = interfaceCode.match(/▸([\s\S]*?)(?=#)/gm);
                      if (interSnippet) {
                        finalInter = finalInter + '\n\n' + `<br>` + '**' + key + '**:' + `<br><br>`;
                        for (let snippet of interSnippet) {
                          let defaultValue = snippet.match(/(?<=\*\*`default`\*\*.)([^\s]+)/gm);
                          if (!defaultValue) {
                            defaultValue = [null];
                          }
                          finalInter =
                            finalInter +
                            snippet
                              .replace(/\*\*\`/gm, '')
                              .replace(/•/gm, '')
                              .replace(/\`\*\*/gm, '')
                              .replace(/(\s\*)(?=\w)/gm, '  `')
                              .replace(/(?<=\w)(\*$)/gm, '`')
                              .replace(/(?<=default)(.[^\s]+)/gm, ': `' + defaultValue[0] + '`');
                        }
                      }
                    }
                  }
                  let wrappedFunction =
                    (await methodClassStart.concat(
                      functionMethod[i]
                        .replace(/▸/gm, '')
                        .replace(/[▸`\*.]/g, '')
                        .replace(/</, '&lt;')
                        .replace(/>/, '&gt;')
                    )) + methodClassEnd;
                  functionNoHeader = functionNoHeader.replace(noLinks, wrappedFunction);
                }
                const functionHTML = await $axios.$post(
                  'https://api.github.com/markdown',
                  {
                    text: functionNoHeader + '<div>' + finalInter + '</div>',
                    mode: 'markdown'
                  },
                  {
                    headers: {
                      authorization: 'token ' + process.env.GITHUB_TOKEN
                    }
                  }
                );
                moduleAPIs[params.family].types["master"][title] = await functionHTML;
              }
            }
      } catch (err) {
        console.log(err.message);
      }
    }
    return { moduleAPIs };
  },


  created() {
    console.log(this.moduleAPIs)
    let module = this.$route.params.family;
    let versionsArray = this.moduleAPI[this.$route.params.family].versionsArray;
    if (!this.$store.getters.loadModules.includes(this.$route.params.family)) {
      return this.$nuxt.error({ statusCode: 404 });
    }

    let apiVersion = this.versionsArray[0];
    if (!this.$route.query.v) {
      this.$router.push({
        query: { v: this.versionsArray[0] },
        hash: this.$route.hash
      });
    } else {
      for (let v of this.versionsArray) {
        let version = this.$route.query.v.match(/^([^.]+)/);
        if (v.startsWith(version[0])) {
          apiVersion = v;
          if (!this.versionsArray.includes(this.$route.query.v)) {
            this.$router.push({
              query: { v: v },
              hash: this.$route.hash
            });
          }
          break;
        }
        this.$router.push({
          query: { v: this.versionsArray[0] },
          hash: this.$route.hash
        });
      }
    }
    this.$store.commit("setDisplay", "family");
    this.$store.commit("setVersion", apiVersion);
    this.$data.menu = this.moduleAPI[this.$route.params.family][
      this.getVersion
    ].menu;
    this.$store.commit("setFamily", module);
    if (this.moduleAPI[module][apiVersion].intro) {
      this.$store.commit("setIntro", true);
    }
    if (this.moduleAPI[module][apiVersion].example) {
      this.$store.commit("setExample", true);
    }
    if (this.moduleAPI[module][apiVersion].usage) {
      this.$store.commit("setUsage", true);
    }
    if (this.moduleAPI[module][apiVersion].faq) {
      this.$store.commit("setFaq", true);
    }
    if (this.moduleAPI[module][apiVersion].advanced) {
      this.$store.commit("setAdvanced", true);
    }
  },
  mounted() {
    this.setClasses();
    this.goToAnchor();
    this.setClipboards();
  },
  beforeDestroy() {
    for (let [element, listener] of this.listeners) {
      element.removeEventListener("click", listener);
    }
    this.listeners.clear();
  }
};
</script>

<style lang="scss">
@import "../../../../assets/styles/main.scss";
@import "../../../../assets/styles/api.scss";
@import "../../../../assets/styles/markdown.scss";

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
  color: $white !important;
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

.changelog-header {
  margin: 20px 0 10px 0;
  padding-top: 10px;
  border-top: 1px solid $dark-white;
  width: 100%;
}

h1 a {
  display: block;
  position: relative;
  top: -116px;
  visibility: hidden;
}

.preload {
  display: none;
}

.api-doc-header {
  position: relative;
}

.api-clipboardCheck {
  position: relative;
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 0 0 5px;
  opacity: 0.7;
  background: url("/img/clipboardCheck.png");
  background-size: contain;
  transition: all 0.2s;
}

.api-clipboard {
  position: relative;
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 0 0 5px;
  background: url("/img/clipboard.png");
  background-size: contain;
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s;
}

.api-clipboard:hover {
  opacity: 0.7;
}

.tutorial-header {
  display: block !important;
}

@media screen and (max-width: 900px) {
  .ecosystem-title {
    margin: 20px 0 0 0;
    padding-bottom: 16px;
  }
}
</style>
