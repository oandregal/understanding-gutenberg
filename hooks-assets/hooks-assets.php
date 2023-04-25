<?php
/**
 * Plugin Name:       Hooks Assets
 * Description:       Example for loading assets using hooks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hooks-assets
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function enqueue_block_assets_register_scripts_and_styles() {
	wp_enqueue_style(
		'enqueue_block_assets_style_body',
		plugins_url( 'body.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'body.css' )
	);
	wp_enqueue_style(
		'enqueue_block_assets_style_wp_block',
		plugins_url( 'wp-block.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'wp-block.css' )
	);
	wp_enqueue_script(
		'enqueue_block_assets_script',
		plugins_url( 'console.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'console.js' ),
		true
	);
}
add_action( 'enqueue_block_assets', 'enqueue_block_assets_register_scripts_and_styles' );

function enqueue_block_editor_assets_register_scripts_and_styles() {
	wp_enqueue_style(
		'enqueue_block_editor_assets_style_body',
		plugins_url( 'body.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'body.css' )
	);
	wp_enqueue_style(
		'enqueue_block_editor_assets_style_wp_block',
		plugins_url( 'wp-block.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'wp-block.css' )
	);
	wp_enqueue_script(
		'enqueue_block_editor_assets_script',
		plugins_url( 'console-editor.js', __FILE__ ),
		array( 'wp-dom' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'console-editor.js' ),
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'enqueue_block_editor_assets_register_scripts_and_styles' );
