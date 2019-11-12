import start from '../static/lib/tutorials/en_US/'

export const state = () => ({
  page: start.gettingstarted.default,
  display: 'home',
  language: 'en_US',
  version: '',
  types: [
    'accept',
    // 'address',
    // 'boom',
    'code',
    'cryptiles',
    // 'formula',
    'hoek',
    'iron',
    // 'lab',
    'pinpoint',
    // 'wreck'
  ],
  modules: [
    'accept',
    'address',
    'ammo',
    'b64',
    'basic',
    'bell',
    'boom',
    'bossy',
    'bounce',
    'bourne',
    'call',
    'catbox',
    'catbox-memcached',
    'catbox-memory',
    'catbox-object',
    'catbox-redis',
    'code',
    'content',
    'cookie',
    'crumb',
    'cryptiles',
    'formula',
    'glue',
    'good',
    'good-console',
    'good-squeeze',
    'h2o2',
    'hawk',
    'hoek',
    'inert',
    'iron',
    'joi',
    'joi-date',
    'lab',
    'mimos',
    'nes',
    'oppsy',
    'pinpoint',
    'podium',
    'rule-capitalize-modules',
    'rule-for-loop',
    'rule-scope-start',
    'scooter',
    'shot',
    'sntp',
    'subtext',
    'topo',
    'vision',
    'wreck',
    'yar'
  ]
});

export const mutations = {
  setPage(state, page) {
    state.page = page
  },
  setDisplay(state, display) {
    state.display = display
  },
  setLanguage(state, language) {
    state.language = language
  },
  setVersion(state, version) {
    state.version = version
  }
};

export const getters = {
  loadPage(state) {
    return state.page
  },
  loadDisplay(state) {
    return state.display
  },
  loadLanguage(state) {
    return state.language
  },
  loadVersion(state) {
    return state.version
  },
  loadTypes(state) {
    return state.types
  },
  loadModules(state) {
    return state.modules
  }
}
