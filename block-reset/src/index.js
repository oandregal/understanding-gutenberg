/**
 * WordPress dependencies
 */
import { createBlock, parse, registerBlockType } from '@wordpress/blocks';
import { dispatch, useDispatch, useSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';

// Trigger reusable blocks fetch.
// They aren't loaded until the user intends to insert something
// (clicks the inserter button, types the slash symbol, etc).
domReady( ( ) => dispatch( 'core/editor' ).__experimentalFetchReusableBlocks() );

const useReusableBlocks = () => {
	const { reusableBlocks } = useSelect( select => ( {
		reusableBlocks: select('core/editor').__experimentalGetReusableBlocks()
	} ) );

	return reusableBlocks;
};

const toBlocks = ( blocks ) => blocks.map(
	( { name, attributes, innerBlocks } ) => createBlock( name, attributes, toBlocks( innerBlocks ) )
);

const edit = () => {
	const { resetBlocks } = useDispatch( 'core/block-editor' );
	const reusableBlocks = useReusableBlocks();

	return (
		<>
			{
				reusableBlocks.map( ( { title, content } ) => ( [
					<Button
						isPrimary
						onClick={ () => resetBlocks( toBlocks( parse( content ) ) ) }
					>
						{ title }
					</Button>,
					' '
				] )
				)
			}
		</>
	);
};

registerBlockType( 'understanding-gutenberg/template', {
	title: 'Template Block',
	description: 'Experiment to reset the editor contents after load',
	category: 'common',
	icon: 'controls-repeat',
	attributes: {},
	edit,
	save: () => null,
} );
