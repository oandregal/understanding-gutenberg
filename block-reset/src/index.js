/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Button } from '@wordpress/components';

registerBlockType( 'nosolosw/template', {
	title: 'Template Block',
	description: 'Experiment to reset the editor contents after load',
	category: 'common',
	icon: 'controls-repeat',
	attributes: {},
	edit: () => (
		<>
			<Button
				isPrimary
				onClick={()=>console.log('first')}>
				One
			</Button>
			&nbsp;
			<Button
				isPrimary
				onClick={()=> console.log('second')}>
				Two
			</Button>
		</>
	),
	save: () => <><a>One</a> <a>Two</a> </>
} );
