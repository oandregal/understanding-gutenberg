<?php
/**
 * Plugin name: Theme.json extended
 */

function theme_json_schema_extended( $schema ){
    $schema['styles']['box']['boxShadow'] = null;
    return $schema;
}
add_filter( 'theme_json_schema', 'theme_json_schema_extended' );

function theme_json_properties_metadata_extended( $metadata ) {
    $metadata['boxShadow'] = array(
        'value'   => array( 'box', 'boxShadow' ),
        'support' => array( '__experimentalBoxShadow' ),
    );
    return $metadata;
}
add_filter( 'theme_json_properties_metadata', 'theme_json_properties_metadata_extended' );