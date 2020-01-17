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
  }
};
