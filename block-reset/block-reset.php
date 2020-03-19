<?php

/**
 * Plugin Name: Understanding Gutenberg: Block Reset
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin that adds a block that resets editor content.
 * Version: 0.0.1
 */

function block_reset_plugin_script_register() {
	$asset_file = './build/index.asset.php';
	$asset = file_exists( $asset_file )
		? require( $asset_file )
		: null;
	$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
	$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( __FILE__ );
	
	wp_register_script(
		'block-reset-plugin-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$dependencies,
		$version
	);
	error_log('register_script');
}

function block_reset_plugin_enqueue_block_editor_assets() {
	error_log('enqueue_script');
	wp_enqueue_script( 'block-reset-plugin-block' );
}

add_action( 'init', 'block_reset_plugin_script_register' );
add_action( 'enqueue_block_editor_assets', 'block_reset_plugin_enqueue_block_editor_assets' );
