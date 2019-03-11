const { __ } = wp.i18n;
const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;

registerBlockType( 'myguten/simple', {
	title: __('Simple Block', 'myguten'),
	category: 'widgets',

	edit: function() {
		return el(
			'p',
			{ style: { color:'red'}, },
			__('Hello World', 'myguten')
		);
	},

	save: function() {
		return el(
			'p',
			{ style: { color:'red'}, },
			__('Hello World', 'myguten')
		);
	}
});
