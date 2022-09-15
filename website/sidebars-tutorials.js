// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	tutorialsSidebar: [
		'index',
		{
			Guides: [
				{ Customization: [
					{
						type: 'autogenerated',
						dirName: 'customization',
					},
				] },
			],
		},
		{
			'Framework Integrations': [
				{ React: [
					{
						type: 'autogenerated',
						dirName: 'react',
					},
				] },
			],
		},
		{
			'How To / Examples': [
				{
					type: 'autogenerated',
					dirName: 'how_to',
				},
			],
		},
	],
};

module.exports = sidebars;