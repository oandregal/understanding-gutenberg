<?php

/**
 * Plugin Name: Understanding Gutenberg: Block Settings Menu
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to test the block settings menu slot.
 * Version: 0.0.1
 */

function blocksettingsmenu_plugin_script_register() {
	wp_register_script(
		'blocksettingsmenu-plugin',
		plugins_url( 'blocksettingsmenu-plugin.js', __FILE__ ),
		array( 'wp-element', 'wp-edit-post', 'wp-plugins' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'blocksettingsmenu-plugin.js' ),
		true
	);
}
add_action( 'init', 'blocksettingsmenu_plugin_script_register' );

function blocksettingsmenu_plugin_script_enqueue() {
	wp_enqueue_script( 'blocksettingsmenu-plugin' );
}
add_action( 'enqueue_block_editor_assets', 'blocksettingsmenu_plugin_script_enqueue' );
