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
		'show_ui'      => true,
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
			'title',
			'editor',
			'revisions',
		),
	);
	register_post_type( 'p2_template', $args );
}

function save_template_plugin_get_template_content( $template_name = 'default' ) {
	$template = '<!-- wp:paragraph {"placeholder":"Template content"} --><p></p><!-- /wp:paragraph -->';
	$post_type_filter   = 'p2_template';
	$post_name_filter   = $template_name;
	$post_status_filter = 'publish';
	$recent_posts     = wp_get_recent_posts(
		array(
			'numberposts' => 1,
			'order'       => 'desc',
			'orderby'     => 'date',
			'post_name'   => $post_name_filter,
			'post_status' => $post_status_filter,
			'post_type'   => $post_type_filter,
		)
	);

	if ( is_array( $recent_posts ) && ( count( $recent_posts ) === 1 ) ) {
		$template = $recent_posts[0]['post_content'];
	} else {
		wp_insert_post(
			array(
				'post_content' => $template,
				'post_name'    => $post_name_filter,
				'post_status'  => $post_status_filter,
				'post_type'    => $post_type_filter,
			),
			true
		);
	}

	return $template;
}

function save_template_plugin_transform_block_to_template( $block_content ) {
	if ( empty( $block_content['blockName'] ) ) {
		return [];
	}

	$inner_blocks = [];
	foreach( $block_content[ 'innerBlocks' ] as $inner_block ) {
		$inner_blocks[] = save_template_plugin_transform_block_to_template( $inner_block );
	}
	return [
		$block_content['blockName'],
		$block_content['attrs'],
		$inner_blocks
	];
}

function save_template_plugin_transform_to_template( $content ) {
	$blocks = parse_blocks( $content );
	$template = array_map( 'save_template_plugin_transform_block_to_template', $blocks );
	return array_filter( $template ); // Clean the empty values
}

function save_template_plugin_set_post_template() {
	$template_content = save_template_plugin_get_template_content();
	$post_type_object = get_post_type_object( 'post' );
	$post_type_object->template = save_template_plugin_transform_to_template( $template_content );
}

function save_template_plugin_init() {
	save_template_plugin_register_template_cpt();
	save_template_plugin_set_post_template();
	save_template_plugin_script_register();
}

add_action( 'init', 'save_template_plugin_init' );
add_action( 'enqueue_block_editor_assets', 'save_template_plugin_enqueue_block_editor_assets' );