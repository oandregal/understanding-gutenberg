/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
import { createElement } from '@wordpress/element';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { serialize } from '@wordpress/blocks';

const createTemplateFromBlocks = ( blocks = [] ) => {
	if ( ! Array.isArray( blocks ) || blocks.length === 0 ) {
		return [];
	}

	return map( blocks, ( { name, attributes, innerBlocks } ) => {
		return [ name, attributes, createTemplateFromBlocks( innerBlocks ) ];
	} );
};

function SaveTemplate() {
	const selectedBlocks = useSelect( ( select ) => {
		const selectors = select( 'core/block-editor' );
		return selectors.hasMultiSelection()
			? selectors.getMultiSelectedBlocks()
			: [ selectors.getSelectedBlock() ];
	} );
	return createElement(
		PluginBlockSettingsMenuItem,
		{
			label: 'Save template',
			onClick: function() {
				console.log( 'Blocks ', selectedBlocks );
				console.log(
					'Template ',
					createTemplateFromBlocks( selectedBlocks )
				);
				console.log(
					'Serialized blocks ',
					serialize( selectedBlocks )
				);
			},
		},
		null
	);
}
registerPlugin( 'save-template-plugin', {
	icon: 'screenoptions',
	render: SaveTemplate,
} );
