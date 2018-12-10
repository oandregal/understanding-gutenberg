<?php

/**
 * Plugin Name: Understanding Gutenberg: Block Controls
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with block controls.
 * Version: 0.0.1
 */

function blockcontrols_plugin_script_register() {
	wp_register_script(
		'blockcontrols-plugin',
		plugins_url( 'blockcontrols-plugin.js', __FILE__ ),
		array( 'wp-hooks', 'wp-compose', 'wp-element', 'wp-editor', 'wp-components' )
	);
}
add_action( 'init', 'blockcontrols_plugin_script_register' );

function blockcontrols_plugin_script_enqueue() {
	wp_enqueue_script( 'blockcontrols-plugin' );
}
add_action( 'enqueue_block_editor_assets', 'blockcontrols_plugin_script_enqueue' );
