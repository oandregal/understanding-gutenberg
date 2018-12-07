( function( wp ) {
	const reducer = ( state = {}, action ) => {
		switch( action.type ) {
			case 'ADD_INPUT':
				return {
					...state,
					[ action.name ]: action.value,
				};
		}
		return state;
	};

	const actions = {
		addInput: function( name, value ) {
			return {
				type: 'ADD_INPUT',
				name,
				value,
			}
		},
	};

	const selectors = {
		getInputValue: function( state, name ){
			return state[ name ];
		},
	};

	wp.data.registerStore( 'data-example', {
		reducer,
		actions,
		selectors,
	} );

} )( window.wp );
