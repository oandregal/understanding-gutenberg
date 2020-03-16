/**
 * WordPress dependencies
 */
import { createElement } from '@wordpress/element';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

function fillBlockSettingsMenuSlot() {
	return createElement(
		PluginBlockSettingsMenuItem,
		{
			icon: 'screenoptions',
			label: 'Save template',
			onClick: function() {
				console.log( 'Template saved' );
			},
		},
		null
	);
}
registerPlugin( 'blocksettingsmenu-plugin', {
	render: fillBlockSettingsMenuSlot,
} );
