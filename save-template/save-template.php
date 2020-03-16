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

function save_template_plugin_enqueue_block_editor_assets() {
	wp_enqueue_script( 'save-template-plugin-block' );
}

function save_template_plugin_register_template_cpt() {
	$args = array(
		'label'        => 'P2 Template',
		'description'  => 'CPT to store P2 templates',
		'public'       => false,
		'show_ui'      => false,
		'show_in_rest' => true,
		'rest_base'    => '__experimental/p2-templates',
		'capabilities' => array(
			'read'                   => 'edit_theme_options',
			'create_posts'           => 'edit_theme_options',
			'edit_posts'             => 'edit_theme_options',
			'edit_published_posts'   => 'edit_theme_options',
			'delete_published_posts' => 'edit_theme_options',
			'edit_others_posts'      => 'edit_theme_options',
			'delete_others_posts'    => 'edit_theme_options',
		),
		'map_meta_cap' => true,
		'supports'     => array(
			'editor',
			'revisions',
		),
	);
	register_post_type( 'p2_template', $args );
}

function save_template_plugin_get_template_from_cpt() {
	// TODO: retrieve from database.
	return array(
		array( 'core/paragraph', array( 'placeholder' => 'Summary' ) ),
		array( 'core/paragraph', array( 'placeholder' => 'Why is it important?' ) ),
		array( 'core/separator' ),
		array( 'core/paragraph', array( 'content' => 'Assigned: @who' ) ),
		array( 'core/paragraph', array( 'content' => 'Status: #backlog #in-progress #needs-review #done' ) ),
		array( 'core/paragraph', array( 'content' => 'Next milestone: date (brief description)' ) ),
	);
}

function save_template_plugin_set_post_template() {
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = save_template_plugin_get_template_from_cpt();
}

function save_template_plugin_init() {
	save_template_plugin_register_template_cpt();
	save_template_plugin_set_post_template();
	save_template_plugin_script_register();
}

add_action( 'init', 'save_template_plugin_init' );
add_action( 'enqueue_block_editor_assets', 'save_template_plugin_enqueue_block_editor_assets' );