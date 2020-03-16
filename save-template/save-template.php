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
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-edit-post' )
	);
}
add_action( 'init', 'save_template_plugin_script_register' );

function save_template_plugin_script_enqueue() {
	wp_enqueue_script( 'save-template-plugin-block' );
}
add_action( 'enqueue_block_editor_assets', 'save_template_plugin_script_enqueue' );

function save_template_register_template() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'core/paragraph', array( 'placeholder' => 'Summary' ) ),
		array( 'core/paragraph', array( 'placeholder' => 'Why is it important?' ) ),
		array( 'core/separator' ),
		array( 'core/paragraph', array( 'content' => 'Assigned: @who' ) ),
		array( 'core/paragraph', array( 'content' => 'Status: #backlog #in-progress #needs-review #done' ) ),
		array( 'core/paragraph', array( 'content' => 'Next milestone: date (brief description)' ) ),
	);
}
add_action( 'init', 'save_template_register_template' );
