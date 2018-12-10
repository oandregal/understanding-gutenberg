( function( wp ) {
	var el = wp.element.createElement;
	var doOnClick = function(){
		console.log( 'control was clicked' );
	}
	var withBlockControls = wp.compose.createHigherOrderComponent( 
		function( BlockEdit ) {
			return function( props ) {
				return el(
					wp.element.Fragment,
					{},
					el( 
						BlockEdit,
						props,
					),
					el(
						wp.editor.BlockControls,
						{},
						el(
							wp.components.Toolbar,
							{
								controls: [
									{
										icon: 'edit',
										onClick: doOnClick
									}
								]
							}
						)
					)
				);
			}
		},
		'withBlockControls',
	);

	wp.hooks.addFilter( 'editor.BlockEdit', 'blockcontrols-plugin/with-inspector', withBlockControls );
} )( window.wp );
