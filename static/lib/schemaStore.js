import { stripIndent } from "common-tags";

export const schemaStore = {
  packageJson: {
    display: "package.json",
    link: "packageJson",
    schema: stripIndent`
    Joi.object({
      name: Joi.string().min(1).max(214).pattern(/^(?:@[a-z0-9-~][a-z0-9-._~]*\\/)?[a-z0-9-~][a-z0-9-._~]*$/),
      version: Joi.string(),
      author: Joi.string(),
      contributors: Joi.string(),
      bugs: Joi.string(),
      homepage: Joi.string(),
      license: Joi.string(),
      keywords: Joi.string(),
      description: Joi.string(),
      repository: Joi.string(),
      main: Joi.string(),
      private: Joi.string(),
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
      browserlist: Joi.string(),
      types: Joi.string(),
      files: Joi.string(),
      unpkg: Joi.string(),
      module: Joi.string(),
      types: Joi.string(),
      bin: Joi.string(),
      man: Joi.string(),
      directories: Joi.string()
    });
    `.trim()
  }
};
