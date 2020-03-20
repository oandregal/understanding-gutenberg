/**
 * WordPress dependencies
 */
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';

registerBlockType( 'understanding-gutenberg/template', {
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
								content: 'Project Idea',
							} ),
							createBlock( 'core/paragraph', {
								placeholder: 'Briefly describe the idea.',
							} ),
							createBlock( 'core/heading', {
								content: 'OKRs',
							} ),
							createBlock( 'core/paragraph', {
								placeholder:
									'How this impacts the company business.',
							} ),
						] );
					} }
				>
					Add Idea Template
				</Button>
				&nbsp;
				<Button
					isPrimary
					onClick={ () => {
						resetBlocks( [
							createBlock( 'core/paragraph', {
								content: 'Attendees: ',
							} ),
							createBlock( 'core/heading', {
								content: 'Things Addressed',
							} ),
							createBlock( 'core/list' ),
						] );
					} }
				>
					Add Meeting Template
				</Button>
			</>
		);
	},
	save: () => null,
} );
