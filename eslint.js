/* eslint-disable no-magic-numbers */
module.exports = {
	env: {
		browser: true,
		es2022: true,
		mocha: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},

	// https://eslint.org/docs/rules/
	// "off" or 0 - turn the rule off
	// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
	// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
	rules: {
		// Possible Problems
		// These rules relate to possible logic errors in code:
		'array-callback-return': [ 'error', { allowImplicit: true } ],
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'off',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': [ 'error', 'except-parens' ],
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': [ 'error', { checkLoops: true } ],
		'no-constructor-return': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [ 'error', { includeExports: true } ],
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': [ 'error', 'both' ],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': [
			'error', {
				skipStrings: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'off',
		'no-self-assign': [ 'error', { props: true } ],
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-undef': 'off',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [ 'error', { enforceForOrderingRelations: true } ],
		'no-unsafe-optional-chaining': [ 'error', { disallowArithmeticOperators: true } ],
		'no-unused-private-class-members': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': [
			'error', {
				classes: true,
				variables: true,
				functions: true,
				allowNamedExports: false
			}
		],
		'no-useless-backreference': 'error',
		'require-atomic-updates': [ 'error', { allowProperties: false } ],
		'use-isnan': [
			'error', {
				enforceForIndexOf: true,
				enforceForSwitchCase: true
			}
		],
		'valid-typeof': [ 'error', { requireStringLiterals: true } ],

		// Suggestions
		// These rules suggest alternate ways of doing things:
		'accessor-pairs': [
			'error', {
				setWithoutGet: true,
				getWithoutSet: false,
				enforceForClassMembers: true
			}
		],
		'arrow-body-style': 'off',
		'block-scoped-var': 'error',
		camelcase: [
			'error', {
				properties: 'always',
				ignoreDestructuring: false,
				ignoreImports: false,
				ignoreGlobals: false
			}
		],
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		complexity: 'off',
		'consistent-return': 'off',
		'consistent-this': 'off',
		curly: [ 'error', 'multi-line', 'consistent' ],
		'default-case': 'off',
		'default-case-last': 'error',
		'default-param-last': 'off',
		'dot-notation': [ 'error', { allowKeywords: true } ],
		eqeqeq: [ 'error', 'always', { null: 'always' } ],
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],
		'grouped-accessor-pairs': [ 'error', 'setBeforeGet' ],
		'guard-for-in': 'off',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'init-declarations': 'off',
		'max-classes-per-file': [ 'error', 1 ],
		'max-depth': 'off',
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'off',
		'max-params': [ 'error', 10 ],
		'max-statements': 'off',
		'multiline-comment-style': [ 'error', 'separate-lines' ],
		'new-cap': [
			'error', {
				newIsCap: true,
				capIsNew: true,
				properties: true
			}
		],
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-confusing-arrow': [
			'error', {
				allowParens: true,
				onlyOneSimpleParam: true
			}
		],
		'no-console': 'off',
		'no-continue': 'off',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-else-return': [ 'error', { allowElseIf: true } ],
		'no-empty': 'off',
		'no-empty-function': [ 'error', { allow: [ 'methods' ] } ],
		'no-eq-null': 'error',
		'no-eval': [ 'error', { allowIndirect: false } ],
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [ 'error', { enforceForLogicalOperands: true } ],
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [
			'error', {
				number: true,
				string: true,
				boolean: false,
				disallowTemplateShorthand: false,
				allow: []
			}
		],
		'no-implicit-globals': [ 'error', { lexicalBindings: false } ],
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-invalid-this': [ 'error', { capIsConstructor: true } ],
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'off',
		'no-loop-func': 'error',
		// 'no-magic-numbers': [
		// 	'error', {
		// 		ignore: [ -1, 0, 1, 2 ],
		// 		ignoreArrayIndexes: true,
		// 		ignoreDefaultValues: true,
		// 		enforceConst: false,
		// 		detectObjects: false
		// 	}
		// ],
		'no-magic-numbers': 'off',
		'no-mixed-operators': [ 'error', { allowSamePrecedence: true } ],
		'no-multi-assign': 'off',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-proto': 'error',
		'no-redeclare': [ 'error', { builtinGlobals: true } ],
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-sequences': [ 'error', { allowInParentheses: false } ],
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': [
			'error', {
				allowAfterThis: false,
				allowAfterSuper: false,
				allowFunctionParams: false,
				allowAfterThisConstructor: false
			}
		],
		'no-unneeded-ternary': [ 'error', { defaultAssignment: true } ],
		'no-unused-expressions': [
			'error', {
				allowTernary: false,
				allowShortCircuit: false,
				allowTaggedTemplates: false
			}
		],
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': [ 'error', { enforceForClassMembers: true } ],
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',
		'no-useless-escape': 'error',
		'no-useless-rename': [
			'error', {
				ignoreImport: false,
				ignoreExport: false,
				ignoreDestructuring: false
			}
		],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': [ 'error', { allowAsStatement: false } ],
		'no-warning-comments': 'off',
		'no-with': 'error',
		'object-shorthand': [ 'error', 'properties' ],
		'one-var': [
			'error', {
				initialized: 'never',
				uninitialized: 'never'
			}
		],
		'one-var-declaration-per-line': [ 'error', 'always' ],
		'operator-assignment': 'off',
		'prefer-arrow-callback': [
			'error', {
				allowNamedFunctions: false,
				allowUnboundThis: false
			}
		],
		'prefer-const': [
			'error', {
				destructuring: 'any',
				ignoreReadBeforeAssign: false
			}
		],
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: false } ],
		'prefer-regex-literals': [ 'error', { disallowRedundantWrapping: true } ],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [
			'error', 'as-needed', {
				numbers: false,
				keywords: false,
				unnecessary: true
			}
		],
		radix: 'off',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'sort-imports': [
			'error', {
				ignoreCase: false,
				ignoreMemberSort: false,
				ignoreDeclarationSort: false,
				memberSyntaxSortOrder: [
					'none',
					'all',
					'multiple',
					'single'
				],
				allowSeparatedGroups: true
			}
		],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': [ 'error', 'always' ],
		strict: 'off',
		'symbol-description': 'error',
		'vars-on-top': 'off',
		yoda: [
			'error', 'never', {
				exceptRange: false,
				onlyEquality: false
			}
		],

		// Layout & Formatting
		// These rules care about how the code looks rather than how it executes:
		'array-bracket-newline': [ 'error', 'consistent' ],
		'array-bracket-spacing': [
			'error', 'always', {
				singleValue: true,
				objectsInArrays: true,
				arraysInArrays: true
			}
		],
		'array-element-newline': [ 'error', 'consistent' ],
		'arrow-parens': [ 'error', 'as-needed', { requireForBlockBody: false } ],
		'arrow-spacing': [
			'error', {
				before: true,
				after: true
			}
		],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
		'comma-dangle': [
			'error', {
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'comma-spacing': [
			'error', {
				before: false,
				after: true
			}
		],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': 'off',
		'dot-location': 'off',
		'eol-last': [ 'error', 'never' ],
		'func-call-spacing': [ 'error', 'never' ],
		'function-call-argument-newline': [ 'error', 'never' ],
		'function-paren-newline': [ 'error', 'never' ],
		'generator-star-spacing': [
			'error', {
				before: false,
				after: true
			}
		],
		'implicit-arrow-linebreak': [ 'error', 'beside' ],
		indent: [
			'error', 'tab', {
				SwitchCase: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				VariableDeclarator: 1,
				StaticBlock: { body: 1 },
				CallExpression: { arguments: 1 },
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				FunctionExpression: { body: 1, parameters: 1 },
				FunctionDeclaration: { body: 1, parameters: 1 },
				flatTernaryExpressions: true,
				offsetTernaryExpressions: true,
				ignoreComments: false
			}
		],
		'jsx-quotes': 'off',
		'key-spacing': [
			'error', {
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error', {
				before: true,
				after: true,
				overrides: {
					catch: { after: true }
				}
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': [
			'error', {
				beforeBlockComment: false,
				beforeLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				allowClassStart: true,
				allowClassEnd: true
			}
		],
		'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],
		'max-len': 'off',
		'max-statements-per-line': [ 'error', { max: 1 } ],
		'multiline-ternary': [ 'error', 'never' ],
		'new-parens': [ 'error', 'always' ],
		'newline-per-chained-call': 'off',
		'no-extra-parens': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': [ 'error', { ignoreEOLComments: false } ],
		'no-multiple-empty-lines': [
			'error', {
				max: 10,
				maxBOF: 0,
				maxEOF: 0
			}
		],
		'no-tabs': 'off',
		'no-trailing-spaces': [
			'error', {
				skipBlankLines: true,
				ignoreComments: false
			}
		],
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [ 'error', 'beside' ],
		'object-curly-newline': [
			'error', {
				multiline: true,
				consistent: true,
				minProperties: 10
			}
		],
		'object-curly-spacing': [
			'error', 'always', {
				arraysInObjects: true,
				objectsInObjects: true
			}
		],
		'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
		'operator-linebreak': [ 'error', 'none', { overrides: {} } ],
		'padded-blocks': 'off',
		'padding-line-between-statements': 'off',
		quotes: [
			'error', 'single', {
				avoidEscape: false,
				allowTemplateLiterals: true
			}
		],
		'rest-spread-spacing': [ 'error', 'never' ],
		semi: [ 'error', 'always', { omitLastInOneLineBlock: true } ],
		'semi-spacing': [ 'error', { before: false, after: true } ],
		'semi-style': [ 'error', 'last' ],
		'space-before-blocks': [ 'error', 'always' ],
		'space-before-function-paren': [
			'error', {
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': [ 'error', { int32Hint: true } ],
		'space-unary-ops': [
			'error', {
				words: true,
				nonwords: false,
				overrides: {}
			}
		],
		'switch-colon-spacing': [
			'error', {
				before: false,
				after: true
			}
		],
		'template-curly-spacing': [ 'error', 'always' ],
		'template-tag-spacing': [ 'error', 'never' ],
		'unicode-bom': [ 'error', 'never' ],
		'wrap-iife': [ 'error', 'inside', { functionPrototypeMethods: true } ],
		'wrap-regex': 'off',
		'yield-star-spacing': [
			'error', {
				before: false,
				after: true
			}
		]
	}
};