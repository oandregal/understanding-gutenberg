/**
 * WordPress dependencies
 */
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';

const template = [ [ 'core/paragraph' ] ];

registerBlockType( 'nosolosw/template', {
	title: 'Template Block',
	description: 'Experiment to reset the editor contents after load',
	category: 'common',
	icon: 'controls-repeat',
	attributes: {},
	edit: () => {
		const { resetBlocks } = useDispatch( 'core/block-editor' );

		return (
			<>
				<Button
					isPrimary
					onClick={ () => {
						resetBlocks( [
							createBlock( 'core/heading', {
								placeholder: 'Heading Before Image',
							} ),
							createBlock( 'core/image' ),
							createBlock( 'core/heading', {
								placeholder: 'Heading After Image',
							} ),
						] );
						// TODO: set template editor
					} }
				>
					Add Heading
				</Button>
				&nbsp;
				<Button
					isPrimary
					onClick={ () => {
						resetBlocks( [
							createBlock( 'core/paragraph', {
								placeholder: 'Text Before Image',
							} ),
							createBlock( 'core/image' ),
							createBlock( 'core/paragraph', {
								placeholder: 'Text After Image',
							} ),
						] );
						// TODO: set template editor
					} }
				>
					Add Paragraph
				</Button>
			</>
		);
	},
	save: () => (
		<>
			<a>One</a> <a>Two</a>{ ' ' }
		</>
	),
} );
