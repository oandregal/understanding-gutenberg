<?php

/**
 * Plugin Name: Understanding Gutenberg: wp-scripts
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with wp-scripts.
 * Version: 0.0.1
 */

function wp_scripts_plugin_script_register() {
	wp_register_script(
		'wp-scripts-plugin-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);
}
add_action( 'init', 'wp_scripts_plugin_script_register' );

function wp_scripts_plugin_script_enqueue() {
	wp_enqueue_script( 'wp-scripts-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'wp_scripts_plugin_script_enqueue' );
