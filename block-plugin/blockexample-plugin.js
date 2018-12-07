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
            if ( props.isSelected ) {
                return el(
                    'input',
                    {
                        onChange: function( event ) { props.setAttributes( { activity: event.target.value, } ); },
                        value: props.attributes.activity || '',
                    },
                );
            } else {
                return el( 'p', {}, 'I ♥ ' + props.attributes.activity + '.' );
            }
        },
        save: function( props ) {
            return el( 'p', {}, 'I ♥ ' + props.attributes.activity + '.' );
        },
    } );
} )( window.wp );
