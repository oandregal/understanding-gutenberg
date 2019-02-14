<?php

/**
 * Plugin Name: Understanding Gutenberg: Block
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with blocks and wp-scripts.
 * Version: 0.0.1
 */

function blockexample_plugin_script_register() {
	wp_register_script(
		'blockexample-plugin-block',
		plugins_url( 'blockexample-plugin.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);
}
add_action( 'init', 'blockexample_plugin_script_register' );

function blockexample_plugin_script_enqueue() {
	wp_enqueue_script( 'blockexample-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'blockexample_plugin_script_enqueue' );
