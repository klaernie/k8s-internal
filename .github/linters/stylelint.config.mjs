import postcssScss from "postcss-scss";

export default {
	extends: ["stylelint-config-standard"],
	rules: {
		"selector-class-pattern": [
			"^(?:CX2|eventTitle|eventTime|eventCount_0|eventSub|slotContent|slotHeader|slotFooter|[a-z][a-z0-9]*(?:-[a-z0-9]+)*)$",
			{
				message: (selector) =>
					`Expected class selector "${selector}" to be kebab-case`,
			},
		],
	},
	overrides: [
		{
			files: ["*.scss", "**/*.scss"],
			extends: ["stylelint-config-recommended-scss"],
			customSyntax: postcssScss,
		},
	],
};
