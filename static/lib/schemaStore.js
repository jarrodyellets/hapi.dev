import { stripIndent } from "common-tags";

export const schemaStore = {
  packageJson: {
    display: "package.json",
    link: "packageJson",
    schema: stripIndent`
    Joi.object({
      name: Joi.string().min(1).max(214).pattern(/^(?:@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]*$/).required(),
      version: Joi.string().pattern(
        /^(0|[1-9]\\d*)\.(0|[1-9]\\d*|x)\.(0|[1-9]\\d*|x)(-(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(\\.(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\\+[0-9a-zA-Z-]+(\\.[0-9a-zA-Z-]+)*)?$/)
        .required(),
      description: Joi.string(),
      keywords: Joi.array().items(Joi.string()),
      license: Joi.string(),
      homepage: Joi.string().uri(),
      repository: Joi.alternatives().try(
        Joi.string(),
        Joi.object().keys({
          type: Joi.string(),
          url: Joi.string().uri(),
          directory: Joi.string()
        })
      ),
      bugs: Joi.alternatives().try(
        Joi.string(),
        Joi.object().keys({
          url: Joi.string().uri(),
          email: Joi.string().email()
        })
      ),
      author: Joi.alternatives().try(
        Joi.string(),
        Joi.object().keys({
          name: Joi.string().required(),
          url: Joi.string().uri(),
          email: Joi.string().email()
        })
      ),
      contributors: Joi.array().items(
        Joi.string(),
        Joi.object().keys({
          name: Joi.string().required(),
          url: Joi.string().uri(),
          email: Joi.string().email()
        })
      ),
      maintainers: Joi.array().items(
        Joi.string(),
        Joi.object().keys({
          name: Joi.string().required(),
          url: Joi.string().uri(),
          email: Joi.string().email()
        })
      ),
      files: Joi.array().items(Joi.string()),
      main: Joi.string(),
      bin: Joi.alternatives().try(
        Joi.string(),
        Joi.object().pattern(/./, Joi.string())
      ),
      module: Joi.string(),
      types: Joi.string(),
      man: Joi.alternatives().try(
        Joi.string(),
        Joi.array().items(Joi.string())
      ),
      directories: Joi.object({
        bin: Joi.string(),
        doc: Joi.string(),
        example: Joi.string(),
        lib: Joi.string(),
        man: Joi.string(),
        test: Joi.string(),
      }),
      scripts: Joi.object({
        prepublish: Joi.string(),
        prepare: Joi.string(),
        prepublishOnly: Joi.string(),
        prepack: Joi.string(),
        postpack: Joi.string(),
        publish: Joi.string(),
        postpublish: Joi.string(),
        preinstall: Joi.string(),
        install: Joi.string(),
        postinstall: Joi.string(),
        preuninstall: Joi.string(),
        unistall: Joi.string(),
        postuninstall: Joi.string(),
        preversion: Joi.string(),
        version: Joi.string(),
        postversion: Joi.string(),
        pretest: Joi.string(),
        test: Joi.string(),
        posttest: Joi.string(),
        prestop: Joi.string(),
        stop: Joi.string(),
        poststop: Joi.string(),
        prestart: Joi.string(),
        start: Joi.string(),
        poststart: Joi.string(),
        prerestart: Joi.string(),
        restart: Joi.string(),
        postrestart: Joi.string(),
      }).pattern(/./, Joi.string()),
      config: Joi.object(),
      dependencies: Joi.object().pattern(/./, Joi.string()),
      devDependencies: Joi.object().pattern(/./, Joi.string()),
      peerDependencies: Joi.object().pattern(/./, Joi.string()),
      optionalDependencies: Joi.object().pattern(/./, Joi.string()),
      bundledDependencies: Joi.object().pattern(/./, Joi.string()),
      os: Joi.array().items(Joi.string()),
      cpu: Joi.array().items(Joi.string()),
      private: Joi.boolean(),
      preferGlobal: Joi.boolean(),
      publishConfig: Joi.object(),
      engines: Joi.object().pattern(
        /^(0|[1-9]\\d*)\.(0|[1-9]\\d*|x)\.(0|[1-9]\\d*|x)(-(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(\\.(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\\+[0-9a-zA-Z-]+(\\.[0-9a-zA-Z-]+)*)?$/),
      readme: Joi.string(),
      dist: Joi.object({
        shasum: Joi.string,
        tarball: Joi.string
      })
    });
    `.trim()
  },
  lernaJson: {
    display: "lerna.json",
    link: "lernaJson",
    schema: stripIndent`
    Joi.object({
      version: Joi.string().pattern(
        /^(0|[1-9]\\d*)\.(0|[1-9]\\d*|x)\.(0|[1-9]\\d*|x)(-(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(\\.(0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\\+[0-9a-zA-Z-]+(\\.[0-9a-zA-Z-]+)*)?$/)
        .required(),
      npmClient: Joi.string(),
      npmClientArgs: Joi.array().items(Joi.string()),
      useWorkspaces: Joi.boolean(),
      workspaces: Joi.array().items(Joi.string()),
      packages: Joi.array().items(Joi.string()),
      ignoreChanges: Joi.array().items(Joi.string()),
      command: Joi.object({
        publish: Joi.object({
          ignoreChanges: Joi.alternatives().try(
            Joi.string(),
            Joi.array().items(Joi.string())
          ),
          message: Joi.string()
        }),
        bootstrap: Joi.object({
          ignore: Joi.alternatives().try(
            Joi.string(),
            Joi.array().items(Joi.string())
          ),
          npmClientArgs: Joi.array().items(Joi.string())
        }),
        init: Joi.object({
          exact: Joi.boolean()
        }),
        run: Joi.object({
          npmClient: Joi.string()
        }),
        version: Joi.object({
          allowBranch: Joi.alternatives().try(
            Joi.string(),
            Joi.array().items(Joi.string())
          ),
          message: Joi.string()
        })
      })
    })
    `
  },
  eslintrc: {
    display: ".eslintrc",
    link: "eslintrc",
    schema: stripIndent`
    Joi.object({
      ecmaFeatures: Joi.object({
        arrowFunctions: Joi.boolean(),
        binaryLiterals: Joi.boolean(),
        blockBindings: Joi.boolean(),
        classes: Joi.boolean(),
        defaultParams: Joi.boolean(),
        destructuring: Joi.boolean(),
        experimentalObjectSpread: Joi.boolean(),
        forOf: Joi.boolean(),
        generators: Joi.boolean(),
        globalReturn: Joi.boolean(),
        impliedStrict: Joi.boolean(),
        jsx: Joi.boolean(),
        modules: Joi.boolean(),
        objectLiteralComputerProperties: Joi.boolean(),
        objectLiteralDuplicateProperties: Joi.boolean(),
        objectLiteralShorthandMethods: Joi.boolean(),
        objectLiteralShorthandProperties: Joi.boolean(),
        octalLiterals: Joi.boolean(),
        regexUFlag: Joi.boolean(),
        regexYFlag: Joi.boolean(),
        restParams: Joi.boolean(),
        spread: Joi.boolean(),
        superInFunctions: Joi.boolean(),
        templateStrings: Joi.boolean(),
        unicodeCodePointEscapes: Joi.boolean()
      }),
      env: Joi.object({
        'amd': Joi.boolean(),
        'applescript': Joi.boolean(),
        'atomtest': Joi.boolean(),
        'browser': Joi.boolean(),
        'commonjs': Joi.boolean(),
        'shared-node-browser': Joi.boolean(),
        'embertest': Joi.boolean(),
        'es6': Joi.boolean(),
        'greasemonkey': Joi.boolean(),
        'jasmine': Joi.boolean(),
        'jest': Joi.boolean(),
        'jquery': Joi.boolean(),
        'meteor': Joi.boolean(),
        'mocha': Joi.boolean(),
        'mongo': Joi.boolean(),
        'nashorn': Joi.boolean(),
        'node': Joi.boolean(),
        'phantomjs': Joi.boolean(),
        'prototpejs': Joi.boolean(),
        'protactor': Joi.boolean(),
        'qunit': Joi.boolean(),
        'serviceworker': Joi.boolean(),
        'shelljs': Joi.boolean(),
        'webextensions': Joi.boolean(),
        'worker': Joi.boolean()
      }),
      extends: Joi.alternatives().try(
        Joi.string(),
        Joi.array().items(Joi.string())
      ),
      global: Joi.object().pattern(/./, Joi.alternatives().try(
        Joi.string(),
        Joi.boolean()
      )),
      noInlineConfig: Joi.boolean(),
      parser: Joi.string(),
      parserOptions: Joi.object({
        ecmaFeatures: Joi.ref('.ecmaFeatures'),
        ecmaVersion: Joi.number().allow(3, 5, 6, 2015, 7, 2016, 8, 2017, 9, 2018, 10, 2019, 11, 2020).only(),
        sourceType: Joi.string().allow("script", "module").only(),
        parser: Joi.string()
      }),
      plugins: Joi.array().items(Joi.string()),
      root: Joi.boolean(),
      ignorePatterns: Joi.array().items(Joi.string()),
      rules: Joi.object({
        'comma-dangle': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'for-direction': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'getter-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-await-in-loop': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-compare-neg-zero': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-cond-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-console': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-constant-condition': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-control-regex': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-debugger': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-dupe-args': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-dupe-keys': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-duplicate-case': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-empty': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-empty-character-class': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-ex-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extra-boolean-cast': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extra-parens': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extra-semi': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-func-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-inner-declarations': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-invalid-regexp': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-irregular-whitespace': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-negated-in-lhs': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-obj-calls': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-prototype-builtins': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-regex-spaces': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-sparse-arrays': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-template-curly-in-string': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unexpected-multiline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unreachable': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unsafe-finally': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unsafe-negation': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'use-isnan': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'valid-jsdoc': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'valid-typeof': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'accessor-pairs': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'array-callback-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'block-scoped-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'class-methods-use-this': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'complexity': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'consistent-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'curly': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'default-case': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'dot-location': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'dot-notation': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'eqeqeq': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'guard-for-in': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-alert': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-caller': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-case-declarations': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-div-regex': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-else-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-empty-function': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-empty-pattern': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-eq-null': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extend-native': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extra-bind': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-extra-label': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-fallthrough': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-floating-decimal': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-global-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-implicit-coercion': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-implicit-globals': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-implied-eval': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-invalid-this': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-iterator': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-labels': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-lone-blocks': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-loop-func': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-magic-numbers': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-multi-spaces': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-multi-str': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-native-reassign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new-func': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new-wrappers': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-octal': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-octal-escape': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-param-reassign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-proto': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-redeclare': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-restricted-properties': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-return-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-return-await': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-script-url': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-self-url': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-self-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-self-compare': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-sequences': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-throw-literal': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unmodified-loop-condition': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unused-expressions': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unused-labels': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-call': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-concat': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-escape': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-void': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-warning-comments': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-with': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-promise-reject-errors': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'radix': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'require-await': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'vars-on-top': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'wrap-iife': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'yoda': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'strict': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'init-declarations': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-catch-shadow': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-delete-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no restricted-globals': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-label-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-shadow': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-shadow-restricted-names': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-undef': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-undefined': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-undef-init': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unused-vars': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-use-before-define': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'callback-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'global-require': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'handle-callback-error': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-buffer-constructor': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-mixed-requires': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new-require': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-path-concat': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-process-env': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-process-exit': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-restricted-modules': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-sync': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'array-bracket-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'array-bracket-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'array-element-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'block-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'brace-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'camelcase': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'capitalize-comments': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'comma-dangle': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'comma-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'comma-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'computed-property-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'consistent-this': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'eol-last': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'func-call-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'func-name-matching': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'func-names': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'func-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'function-call-argument-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'function-paren-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'id-blacklist': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'id-length': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'id-match': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'implicit-arrow-linebreak': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'indent': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'indent-legacy': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'jsx-quotes': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'key-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'keyword-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'line-comment-position': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'lines-between-class-members': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'linebreak-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'lines-around-comment': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'lines-around-directive': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-depth': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-len': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-lines': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-nested-callbacks': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-params': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-statements': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'max-statements-per-line': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'multiline-comment-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'multiline-ternary': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'new-cap': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'newline-after-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'newline-before-return': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'newline-per-chained-call': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'new-parens': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-array-constructor': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-bitwise': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-continue': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-inline-comments': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-lonely-if': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-mixed-operators': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-mixed-spaces-and-tabs': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-multi-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-multiple-empty-lines': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-negated-condition': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-nested-ternary': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new-object': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-plusplus': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-restricted-syntax': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-spaced-func': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-tabs': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-ternary': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-trailing-spaces': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-underscore-dangle': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-unneeded-ternary': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-whitespace-before-property': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'nonblock-statement-body-position': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'object-curly-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'object-curly-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'object-property-newline': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'object-shorthand': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'one-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'one-var-declaration-per-line': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'operator-assignment': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'operator-linebreak': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'padded-blocks': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'padding-line-between-statements': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'quote-props': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'quotes': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'require-jsdoc': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'semi': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'semi-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'semi-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'sort-keys': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'sort-vars': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'space-before-blocks': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'space-before-function-paren': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'spaced-comment': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'space-infix-ops': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'space-in-parens': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'space-unary-ops': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'switch-colon-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'template-tag-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'unicode-bom': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'wrap-regex': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'arrow-body-style': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'arrow-parens': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'arrow-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'constructor-super': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'generator-star-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-class-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-confusing-arrow': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-const-assign': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-dupe-class-members': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-duplicate-imports': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-new-symbol': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-restricted-imports': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-this-before-super': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-computed-key': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-constructor': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-useless-rename': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'no-var': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'object-shorthand': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-arrow-callback': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-const': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-destructuring': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-numeric-literals': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-reflect': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-rest-params': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-spread': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'prefer-template': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'require-yield': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'rest-spread-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'sort-imports': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'symbol-description': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'template-curly-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array()
        ),
        'yield-star-spacing': Joi.alternatives().try(
          Joi.string().allow("off", "warn", "error").only(),
          Joi.number().allow(0, 1, 2).only(),
          Joi.array(),
        )
      }).pattern(/./, Joi.alternatives().try(
        Joi.string().allow("off", "warn", "error").only(),
        Joi.number().allow(0, 1, 2).only(),
        Joi.array(),
      ))
    })
    `
  }
};
