( function( wp ) {
	var el = wp.element.createElement;
	var Text = wp.components.TextControl;
	var compose = wp.compose.compose;
	var withSelect = wp.data.withSelect;
	var withDispatch = wp.data.withDispatch;

	var MetaBlockField = compose(
		withSelect( function( select, props ) {
			return {
				metaFieldValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.fieldName ]
			}
		} ),
		withDispatch( function( dispatch, props ) {
			return {
				setMetaFieldValue: function( fieldValue ) {
					dispatch( 'core/editor' ).editPost( { meta: { [ props.fieldName ]: fieldValue } } );
				}
			}
		} )
	)( function( props ) {
		return el( Text, {
				label: 'Meta Block Field',
				value: props.metaFieldValue,
				onChange: ( content ) => {
					props.setMetaFieldValue( content );
				},
			} );
	} );

	wp.plugins.registerPlugin( 'my-plugin-sidebar', {
		render: function(){
			return wp.editPost.PluginSidebar( {
				icon: 'admin-post',
				name: 'my-plugin-sidebar',
				title: 'My plugin sidebar',
				children: el(
					'div',
					{ className: 'sidebar-plugin-content' },
					el( MetaBlockField, { fieldName: 'sidebar_plugin_meta_block_field' } )
				),
			} );
		}
	} );
} )( window.wp );
