<?php
/**
 * Plugin name: Understanding Gutenberg: Meta box demo
 */

function demo_meta_box_add() {
	add_meta_box(
		'demo-meta-box',
		'Demo Meta Box',
		'__return_empty_string',
		'post',
		'normal',
		'high',
		array(
			'__back_compat_meta_box' => false,
			'__block_editor_compatible_meta_box' => false,
		)
	);
}
add_action( 'add_meta_boxes', 'demo_meta_box_add' );
