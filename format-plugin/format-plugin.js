( function( wp ) {
	wp.richText.registerFormatType(
		'format-plugin/edit', {
			title: 'Edit',
			tagName: 'span',
			attributes: {
				'inputname': 'data-input-name',
			},
			className: 'format-plugin-edit',
			edit: function( props ) {
				return wp.element.createElement(
					wp.editor.RichTextToolbarButton, {
						icon: 'edit',
						title: 'Edit',
						onClick: function() {
							props.onChange(
								wp.richText.toggleFormat(
									props.value, {
										type: 'format-plugin/edit',
										attributes: {
											inputname: 'input name',
										},
									},
								)
							);
						},
						isActive: props.isActive,
					}
				);
			},
		}
	);
} )( window.wp );
