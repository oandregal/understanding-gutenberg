<?php

/**
 * Plugin Name: dataexample
 * Plugin URI: https://github.com/nosolosw/dataexample-plugin
 * Description: Plugin to showcase how to work with data
 * Version: 0.0.1
 */

function dataexample_plugin_script_register() {
	wp_register_script(
		'dataexample-plugin',
		plugins_url( 'dataexample-plugin.js', __FILE__ ),
		array( 'wp-data' )
	);
}
add_action( 'init', 'dataexample_plugin_script_register' );

function dataexample_plugin_script_enqueue() {
	wp_enqueue_script( 'dataexample-plugin' );
}
add_action( 'enqueue_block_editor_assets', 'dataexample_plugin_script_enqueue' );
