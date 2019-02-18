( function( wp ) {
    var el = wp.element.createElement;
    var onChangeHandler = function( props) {
        return function( event ) {
            props.setAttributes( { activity: event.target.value, } );
        }
    }
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
                return (
                    <input
                        onChange={ onChangeHandler( props ) }
                        value={ props.attributes.activity || '' }
                        />
                );
            } else {
                return (
                    <p>'I ♥ ' + props.attributes.activity + '.'</p>
                );
            }
        },
        save: function( props ) {
            return (
                <p>'I ♥ ' + props.attributes.activity + '.'</p>
            );
        },
    } );
} )( window.wp );
