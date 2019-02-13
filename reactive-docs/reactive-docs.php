<?php

/**
 * Plugin Name: Reactive Docs
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Reactive Docs for WordPress
 * Version: 0.0.1
 */

function reactivedocs_plugin_script_register() {
	wp_register_script(
		'reactivedocs-gutenberg-js',
		plugins_url( 'assets/editor.js', __FILE__ ),
		array( 'wp-editor', 'wp-element', 'wp-rich-text' )
	);
	wp_register_script(
		'reactivedocs-engine-js',
		plugins_url( 'assets/engine.js', __FILE__ ),
		array( 'wp-dom-ready' )
	);
	wp_register_style(
		'reactivedocs-css',
		plugins_url( 'assets/reactive-docs.css', __FILE__ )
	);
}
add_action( 'init', 'reactivedocs_plugin_script_register' );

function reactivedocs_plugin_enqueue_assets_editor() {
	wp_enqueue_script( 'reactivedocs-gutenberg-js' );
}
add_action( 'enqueue_block_editor_assets', 'reactivedocs_plugin_enqueue_assets_editor' );

function reactivedocs_plugin_enqueue_assets_editor_and_frontend() {
	wp_enqueue_style( 'reactivedocs-css' );
	wp_enqueue_script( 'reactivedocs-engine-js' );
}
add_action( 'enqueue_block_assets', 'reactivedocs_plugin_enqueue_assets_editor_and_frontend' );
