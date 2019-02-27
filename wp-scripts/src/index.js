import { createElement } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blockexample-plugin/block', {
    title: 'Love',
    icon: 'heart',
    category: 'common',
    edit: () => createElement(
        'p',
        {},
        'I ♥ Gutenberg.'
    ),
    save: () => createElement(
        'p',
        {},
        'I ♥ Gutenberg.'
    ),
} );
