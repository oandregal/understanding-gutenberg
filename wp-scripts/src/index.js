import { createElement } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blockexample-plugin/block', {
    title: 'Love',
    icon: 'heart',
    category: 'common',
    edit: () => <p>I ♥ Gutenberg.</p>,
    save: () => <p>I ♥ Gutenberg.</p>,
} );
