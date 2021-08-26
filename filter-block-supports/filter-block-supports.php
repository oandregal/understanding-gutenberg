<?php

/**
 * Plugin Name: Understanding Gutenberg: Filter block supports
 * Plugin URI: https://github.com/nosolosw/understanding-gutenberg
 * Description: Plugin to showcase how to filter block data.
 * Version: 0.0.1
 */

function filter_block_supports( $metadata ) {
	if ( $metadata[ 'name' ] === 'core/gallery' ) {
		$metadata['supports']['align'] = ['left', 'right'];
	}

	return $metadata;
};
add_filter( 'block_type_metadata', 'filter_block_supports' );
