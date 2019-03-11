<?php
/**
 * Plugin Name: Myguten Plugin
 * Text Domain: myguten
 */
function myguten_block_init() {
    wp_register_script(
        'myguten-script',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-i18n' )
    );

    register_block_type( 'myguten/simple', array(
        'editor_script' => 'myguten-script',
    ) );
}
add_action( 'init', 'myguten_block_init' );

function myguten_set_script_translations() {
	wp_set_script_translations( 'myguten-script', 'myguten', plugin_dir_path( __FILE__ ) . 'languages' );
}
add_action( 'init', 'myguten_set_script_translations' );
