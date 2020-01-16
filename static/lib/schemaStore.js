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
        Joi.object().keys({
          type: Joi.string(),
        })
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
      })
      scripts: Joi.string(),
      config: Joi.string(),
      dependencies: Joi.string(),
      devDependencies: Joi.string(),
      peerDependencies: Joi.string(),
      optionalDependencies: Joi.string(),
      bundledDependencies: Joi.string(),
      os: Joi.string(),
      cpu: Joi.string(),
      private: Joi.string(),
      publishConfig: Joi.string(),
      engines: Joi.string(),
    });
    `.trim()
  }
};
