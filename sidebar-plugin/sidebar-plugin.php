<?php

/**
 * Plugin Name: Understanding Gutenberg: Sidebar
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to create a sidebar
 * Version: 0.0.1
 */

function sidebar_plugin_script_register() {
	wp_register_script(
		'sidebar-plugin-block',
		plugins_url( 'sidebar-plugin.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post' )
	);
}
add_action( 'init', 'sidebar_plugin_script_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'sidebar-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );
