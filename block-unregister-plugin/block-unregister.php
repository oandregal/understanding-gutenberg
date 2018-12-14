<?php

// Plugin Name: Understanding Gutenberg, Unregister block

function block_unregister_blacklist_blocks() {
	wp_enqueue_script(
		'block_unregister-blacklist-blocks',
		plugins_url( 'block-unregister.js', __FILE__ ),
		// Note that list here the wp-edit-post dependency
		// to make sure our JS is executed after the editor
		// is initialized.
		// An alternative to this will be to use the
		// _wpLoadGutenbergEditor promise.
		// See https://github.com/WordPress/gutenberg/pull/12613
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
	);
}
add_action( 'enqueue_block_editor_assets', 'block_unregister_blacklist_blocks' );
