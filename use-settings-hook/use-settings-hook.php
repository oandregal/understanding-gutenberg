<?php
/**
 * Plugin Name: Use Settings Hook
 * Plugin URI: https://github.com/oandregal/understanding-gutenberg
 * Description: Plugin to showcase how to hook into the block editor settings.
 * Version: 0.0.1
 */

add_filter( 'block_editor_settings_all', function( $settings ) {
	$settings['__experimentalFeatures']['blocks']['core/quote']['core/paragraph']['color']['palette']['theme'] = [
		[ "color" => '#000', "name" => 'Black', "slug" => 'black' ],
		[ "color" => '#fff', "name" => 'White', "slug" => 'white' ],
	];
	return $settings;
} );

// Register & enqueue block editor script.
function use_settings_hook_plugin_register() {
	wp_register_script(
		'use_settings_hook_plugin_register',
		plugins_url( 'use-settings-hook.js', __FILE__ ),
		array( 'wp-data', 'wp-hooks' )
	);
}
add_action( 'init', 'use_settings_hook_plugin_register' );

function use_settings_hook_plugin_enqueue() {
	wp_enqueue_script( 'use_settings_hook_plugin_register' );
}
add_action( 'enqueue_block_editor_assets', 'use_settings_hook_plugin_enqueue' );
