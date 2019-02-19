( function( wp ) {
    var el = wp.element.createElement;
    wp.blocks.registerBlockType( 'blockexample-plugin/block', {
        title: 'Love',
        icon: 'heart',
        category: 'common',
        attributes: {
            activity: {
                type: 'string',
            },
        },
        edit: function( props ) {
            return ( el(
                'p',
                {},
                'I ♥ Gutenberg.'
            ) );
        },
        save: function( props ) {
            return ( el(
                'p',
                {},
                'I ♥ .'
            ) );
        },
    } );
} )( window.wp );
