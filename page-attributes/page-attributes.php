<?php

/**
 * Plugin Name: Understanding Gutenberg: Page attributes
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with page attributes.
 * Version: 0.0.1
 */

function page_atts_plugin_script_register() {
	wp_register_script(
		'page-atts-plugin-js',
		plugins_url( 'page-attributes.js', __FILE__ ),
		array(
			'wp-components',
			'wp-data',
			'wp-element',
			'wp-i18n',
			'wp-plugins',
			'wp-edit-post',
			'wp-editor',
		)
	);
}
add_action( 'init', 'page_atts_plugin_script_register' );

function page_atts_plugin_enqueue_assets_editor() {
	wp_enqueue_script( 'page-atts-plugin-js' );
}
add_action( 'enqueue_block_editor_assets', 'page_atts_plugin_enqueue_assets_editor' );
