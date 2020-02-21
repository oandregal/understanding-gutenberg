<?php

/**
 * Plugin Name: Understanding Gutenberg: Block Style
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to work with block styles.
 * Version: 0.0.1
 */

function block_styles_plugin_register_new_styles() {
	register_block_style(
		'core/paragraph',
		array(
			'name'         => 'color-hotpink',
			'label'        => 'Hot Pink',
			'inline_style' => 'p.is-style-color-hotpink { color: hotpink; }'
		)
	);

	wp_register_script(
		'block-styles-plugin-js',
		plugins_url( 'block-styles-plugin.js', __FILE__ ),
		array( 'wp-blocks' )
	);
	wp_register_style(
		'block-styles-plugin-css',
		plugins_url( 'block-styles-plugin.css', __FILE__ )
	);
}
add_action( 'init', 'block_styles_plugin_register_new_styles' );

function block_styles_plugin_enqueue() {
	wp_enqueue_script( 'block-styles-plugin-js' );
	wp_enqueue_style( 'block-styles-plugin-css' );
}
add_action( 'enqueue_block_editor_assets', 'block_styles_plugin_enqueue' );
