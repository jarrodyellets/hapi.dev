
# Interface: Cli

## Hierarchy

* **Cli**

## Index

### Properties

* [assert](_lab_21_0_0_index_d_.script.cli.md#optional-assert)
* [bail](_lab_21_0_0_index_d_.script.cli.md#optional-bail)
* [colors](_lab_21_0_0_index_d_.script.cli.md#optional-colors)
* [context-timeout](_lab_21_0_0_index_d_.script.cli.md#optional-context-timeout)
* [coverage](_lab_21_0_0_index_d_.script.cli.md#optional-coverage)
* [coverage-all](_lab_21_0_0_index_d_.script.cli.md#optional-coverage-all)
* [coverage-exclude](_lab_21_0_0_index_d_.script.cli.md#optional-coverage-exclude)
* [coverage-flat](_lab_21_0_0_index_d_.script.cli.md#optional-coverage-flat)
* [coverage-module](_lab_21_0_0_index_d_.script.cli.md#optional-coverage-module)
* [coverage-path](_lab_21_0_0_index_d_.script.cli.md#optional-coverage-path)
* [coveragePattern](_lab_21_0_0_index_d_.script.cli.md#optional-coveragepattern)
* [default-plan-threshold](_lab_21_0_0_index_d_.script.cli.md#optional-default-plan-threshold)
* [dry](_lab_21_0_0_index_d_.script.cli.md#optional-dry)
* [environment](_lab_21_0_0_index_d_.script.cli.md#optional-environment)
* [flat](_lab_21_0_0_index_d_.script.cli.md#optional-flat)
* [globals](_lab_21_0_0_index_d_.script.cli.md#optional-globals)
* [grep](_lab_21_0_0_index_d_.script.cli.md#optional-grep)
* [id](_lab_21_0_0_index_d_.script.cli.md#optional-id)
* [inspect](_lab_21_0_0_index_d_.script.cli.md#optional-inspect)
* [leaks](_lab_21_0_0_index_d_.script.cli.md#optional-leaks)
* [lint](_lab_21_0_0_index_d_.script.cli.md#optional-lint)
* [lint-errors-threshold](_lab_21_0_0_index_d_.script.cli.md#lint-errors-threshold)
* [lint-fix](_lab_21_0_0_index_d_.script.cli.md#optional-lint-fix)
* [lint-options](_lab_21_0_0_index_d_.script.cli.md#optional-lint-options)
* [lint-warnings-threshold](_lab_21_0_0_index_d_.script.cli.md#lint-warnings-threshold)
* [linter](_lab_21_0_0_index_d_.script.cli.md#optional-linter)
* [output](_lab_21_0_0_index_d_.script.cli.md#optional-output)
* [path](_lab_21_0_0_index_d_.script.cli.md#optional-path)
* [pattern](_lab_21_0_0_index_d_.script.cli.md#optional-pattern)
* [progress](_lab_21_0_0_index_d_.script.cli.md#optional-progress)
* [reporter](_lab_21_0_0_index_d_.script.cli.md#optional-reporter)
* [seed](_lab_21_0_0_index_d_.script.cli.md#optional-seed)
* [shuffle](_lab_21_0_0_index_d_.script.cli.md#shuffle)
* [silent-skips](_lab_21_0_0_index_d_.script.cli.md#optional-silent-skips)
* [sourcemaps](_lab_21_0_0_index_d_.script.cli.md#optional-sourcemaps)
* [threshold](_lab_21_0_0_index_d_.script.cli.md#optional-threshold)
* [timeout](_lab_21_0_0_index_d_.script.cli.md#optional-timeout)
* [transform](_lab_21_0_0_index_d_.script.cli.md#optional-transform)
* [types](_lab_21_0_0_index_d_.script.cli.md#optional-types)
* [types-test](_lab_21_0_0_index_d_.script.cli.md#optional-types-test)

## Properties

### `Optional` assert

• **assert**? : *string*

Specifies an assertion library module path to require and make available under Lab.assertions as well as use for enhanced reporting.

___

### `Optional` bail

• **bail**? : *boolean*

Forces the process to exist with a non zero exit code on the first test failure.

**`default`** false

___

### `Optional` colors

• **colors**? : *boolean*

Enables color output.

**`default`** terminal capabilities.

___

### `Optional` context-timeout

• **context-timeout**? : *number*

Sets a timeout value for before, after, beforeEach, afterEach in milliseconds.

**`default`** 0

___

### `Optional` coverage

• **coverage**? : *boolean*

Enable code coverage analysis

**`default`** false

___

### `Optional` coverage-all

• **coverage-all**? : *boolean*

Includes all files in coveragePath in report.

**`default`** false

___

### `Optional` coverage-exclude

• **coverage-exclude**? : *string[]*

Set code coverage excludes (an array of path strings).

___

### `Optional` coverage-flat

• **coverage-flat**? : *boolean*

Prevents recursive inclusion of all files in coveragePath in report.

**`default`** false

___

### `Optional` coverage-module

• **coverage-module**? : *string[]*

Enables coverage on external modules.

___

### `Optional` coverage-path

• **coverage-path**? : *string*

Sets code coverage path.

___

### `Optional` coveragePattern

• **coveragePattern**? : *RegExp*

File pattern to use for locating files for coverage.

___

### `Optional` default-plan-threshold

• **default-plan-threshold**? : *number*

Minimum plan threshold to apply to all tests that don't define any plan.

___

### `Optional` dry

• **dry**? : *boolean*

Skip all tests (dry run).

**`default:`** false

___

### `Optional` environment

• **environment**? : *string*

Value to set NODE_ENV before tests.

**`default:`** 'test'

___

### `Optional` flat

• **flat**? : *boolean*

Prevent recursive collection of tests within the provided path.

**`default`** false

___

### `Optional` globals

• **globals**? : *string[]*

Sets a list of globals to ignore for the leak detection (comma separated).

___

### `Optional` grep

• **grep**? : *string*

Only run tests matching the given pattern which is internally compiled to a RegExp.

___

### `Optional` id

• **id**? : *number[]*

Range of test ids to execute.

___

### `Optional` inspect

• **inspect**? : *boolean*

Sets lab to start with the node.js native debugger.

**`default`** false

___

### `Optional` leaks

• **leaks**? : *boolean*

Sets global variable leaks detection.

**`default`** true

___

### `Optional` lint

• **lint**? : *boolean*

Enables code lint.

**`default`** false

___

###  lint-errors-threshold

• **lint-errors-threshold**: *number*

Linter errors threshold in absolute value.

**`default`** 0

___

### `Optional` lint-fix

• **lint-fix**? : *boolean*

Apply any fixes from the linter.

**`default`** false

___

### `Optional` lint-options

• **lint-options**? : *string*

Options to pass to linting program. It must be a string that is JSON.parse(able).

___

###  lint-warnings-threshold

• **lint-warnings-threshold**: *number*

Linter warnings threshold in absolute value.

**`default`** 0

___

### `Optional` linter

• **linter**? : *string*

Linter path.

**`default`** 'eslint'

___

### `Optional` output

• **output**? : *string | string[]*

File path to write test results. When set to an array, the array size must match the reporter option array.

**`default`** stdout

___

### `Optional` path

• **path**? : *string[]*

File paths to load tests from.

**`default`** ['test']

___

### `Optional` pattern

• **pattern**? : *RegExp*

File pattern to use for locating tests (must include file extensions).

___

### `Optional` progress

• **progress**? : *number*

Sets output verbosity (0: none, 1: normal, 2: verbose).

**`default`** 1

___

### `Optional` reporter

• **reporter**? : *string | string[]*

Reporter type. One of: 'console', 'html', 'json', 'tap', 'lcov', 'clover', 'junit'.

**`default`** 'console'

___

### `Optional` seed

• **seed**? : *string*

Random number seed when shuffle is enabled.

___

###  shuffle

• **shuffle**: *boolean*

Shuffle script execution order.

**`default`** false

___

### `Optional` silent-skips

• **silent-skips**? : *boolean*

Silence skipped tests.

**`default`** false

___

### `Optional` sourcemaps

• **sourcemaps**? : *boolean*

Enable support for sourcemaps.

**`default`** false

___

### `Optional` threshold

• **threshold**? : *number*

Code coverage threshold percentage.

___

### `Optional` timeout

• **timeout**? : *number*

Timeout for each test in milliseconds.

**`default`** 2000

___

### `Optional` transform

• **transform**? : *[Transformer](_lab_21_0_0_index_d_.script.transformer.md)[]*

Transformers for non-js file types.

___

### `Optional` types

• **types**? : *boolean*

Test types definitions.

**`default`** false

___

### `Optional` types-test

• **types-test**? : *string*

Location of types definitions test file.
