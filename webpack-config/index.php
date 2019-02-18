<?php

/**
 * Plugin Name: Understanding Gutenberg: webpack-config
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with webpack-config.
 * Version: 0.0.1
 */

function webpack_config_plugin_script_register() {
	wp_register_script(
		'webpack-config-plugin-block',
		plugins_url( 'index.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);
}
add_action( 'init', 'webpack_config_plugin_script_register' );

function webpack_config_plugin_script_enqueue() {
	wp_enqueue_script( 'webpack-config-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'webpack_config_plugin_script_enqueue' );
