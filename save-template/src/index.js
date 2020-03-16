/**
 * WordPress dependencies
 */
import { createElement } from '@wordpress/element';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';

function SaveTemplate() {
	const selectedBlocks = useSelect( ( select ) => {
		const selectors = select( 'core/block-editor' );
		return selectors.hasMultiSelection()
			? selectors.getMultiSelectedBlocks()
			: selectors.getSelectedBlock();
	} );
	return createElement(
		PluginBlockSettingsMenuItem,
		{
			label: 'Save template',
			onClick: function() {
				console.log( 'Blocks selected are ', selectedBlocks );
			},
		},
		null
	);
}
registerPlugin( 'save-template-plugin', {
	icon: 'screenoptions',
	render: SaveTemplate,
} );
