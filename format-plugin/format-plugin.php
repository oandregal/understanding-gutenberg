<?php

/**
 * Plugin Name: Understanding Gutenberg: Format
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with formats.
 * Version: 0.0.1
 */

function format_plugin_script_register() {
	wp_register_script(
		'format-plugin',
		plugins_url( 'format-plugin.js', __FILE__ ),
		array( 'wp-editor', 'wp-element', 'wp-rich-text' )
	);
}
add_action( 'init', 'format_plugin_script_register' );

function format_plugin_script_enqueue() {
	wp_enqueue_script( 'format-plugin' );
}
add_action( 'enqueue_block_editor_assets', 'format_plugin_script_enqueue' );
