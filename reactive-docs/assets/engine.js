( function( wp ) {
	function doTheMagic() {
		console.log( 'do the magic', document.getElementsByClassName( 'reactivedocs-input' ) );
	}
	wp.domReady( doTheMagic );
} )( window.wp );
