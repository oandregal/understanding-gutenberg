( function() {
	const { registerBlockType } = wp.blocks;
	const { createElement: el } = wp.element;
	const { InnerBlocks } = wp.editor;

	registerBlockType( 'acme/product', {
		title: 'Product',
		icon: 'carrot',
		category: 'common',

		edit() {
			return el( 'div', { className: 'product', style: { outline: '1px solid gray', padding: 5 } },
				// Only paragraphs, images, and products:
				el( InnerBlocks, { templateLock: 'insert', allowedBlocks: [ 'core/image', 'core/list' ], template: [ [ 'acme/buy-button' ], [ 'core/image' ], [ 'core/list' ] ] } )
				// Everything and products:
				//el( InnerBlocks )
			);
		},

		save() {
			return el( 'div', { className: 'product', style: { outline: '1px solid gray', padding: 5 } },
				el( InnerBlocks.Content )
			);
		},
	} );

	registerBlockType( 'acme/buy-button', {
		title: 'Buy Button',
		icon: 'cart',
		category: 'common',

		// Only allow in products:
		parent: [ 'acme/product' ],

		edit() {
			return el(
				'button',
				{
					className: 'buy-button',
					style: { display: 'block', margin: '0 auto', padding: '10px 30px' },
				},
				'Buy Now'
			);
		},

		save() {
			return el(
				'button',
				{
					className: 'buy-button',
					style: { display: 'block', margin: '0 auto', padding: '10px 30px' },
				},
				'Buy Now'
			);
		},
	} );
} )();

