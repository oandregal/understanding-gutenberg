<?php

/**
 * Plugin Name: Understanding Gutenberg: Save Template
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to save a set of blocks as a template.
 * Version: 0.0.1
 */

function save_template_plugin_script_register() {
	wp_register_script(
		'save-template-plugin-block',
		plugins_url( 'save-template.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-edit-post' )
	);
}
add_action( 'init', 'save_template_plugin_script_register' );

function save_template_plugin_script_enqueue() {
	wp_enqueue_script( 'save-template-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'save_template_plugin_script_enqueue' );
