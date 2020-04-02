<?php

/**
 * Plugin Name: Understanding Gutenberg: Template lock plugin
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Template lock example plugin.
 * Version: 0.0.1
 */

function templatelock_plugin_script_register() {
	wp_register_script(
		'templatelock-plugin-block',
		plugins_url( 'templatelock-plugin.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' )
	);
}
add_action( 'init', 'templatelock_plugin_script_register' );

function templatelock_plugin_script_enqueue() {
	wp_enqueue_script( 'templatelock-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'templatelock_plugin_script_enqueue' );
