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
}

function block_reset_plugin_enqueue_block_editor_assets() {
	wp_enqueue_script( 'block-reset-plugin-block' );
}

function block_reset_plugin_block_editor_settings( $settings ) {
	// pull reusable blocks from database (perhaps filter by metadata if we want)
	// add them to block settings
	$settings['p2_template'] = [
		[
			'title' => 'Meeting Template',
			'content' => '<!-- wp:paragraph --><p>Attendees: </p><!-- /wp:paragraph --><!-- wp:heading --><h2>Things Addressed</h2><!-- /wp:heading --><!-- wp:list --><ul><li></li></ul><!-- /wp:list --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->'
		],
		[
			'title' => 'Project Idea',
			'content' => '<!-- wp:paragraph --><p>Attendees: </p><!-- /wp:paragraph --><!-- wp:heading --><h2>Things Addressed</h2><!-- /wp:heading --><!-- wp:list --><ul><li></li></ul><!-- /wp:list --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->'
		]
	];
	return $settings;
}

add_action( 'init', 'block_reset_plugin_script_register' );
add_action( 'enqueue_block_editor_assets', 'block_reset_plugin_enqueue_block_editor_assets' );
// add_filter( 'block_editor_settings', 'block_reset_plugin_block_editor_settings' );
