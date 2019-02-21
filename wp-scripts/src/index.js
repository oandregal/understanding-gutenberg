import { createElement } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blockexample-plugin/block', {
    title: 'Love',
    icon: 'heart',
    category: 'common',
    edit: function() {
        return ( createElement(
            'p',
            {},
            'I ♥ Gutenberg.'
        ) );
    },
    save: function() {
        return ( createElement(
            'p',
            {},
            'I ♥ .'
        ) );
    },
} );
