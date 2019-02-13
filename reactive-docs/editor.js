( function( wp ) {
	// Dependencies
	const { RichTextToolbarButton } = wp.editor;
	const { Component, Fragment } = wp.element;
	const { registerFormatType, applyFormat, removeFormat } = wp.richText;
	const { IconButton, Popover } = wp.components;

	// Constants
	const inputFormat = 'reactivedocs/input';
	const DEFAULT_INPUT_NAME = 'defaultInputName';

	class InputNamePopover extends Component {
		constructor() {
			super( ...arguments );
			this.state = {
				inputName: DEFAULT_INPUT_NAME,
			};
			this.updateInternalState = this.updateInternalState.bind( this );
			this.updateParent = this.updateParent.bind( this );
		}

		updateInternalState( event ) {
			this.setState( { inputName: event.target.value } );
		}

		updateParent() {
			this.props.onUpdateInputName( this.state.inputName );
		}

		render() {
			const { inputName } = this.state;
			return (
				<Popover>
				<input value={ inputName } onChange={ this.updateInternalState } />
				<IconButton icon="editor-break" onClick={ this.updateParent } />
				</Popover>
			);
		}
	}

	class EditComponent extends Component {
		constructor() {
			super( ...arguments );
			this.onToggleInput = this.onToggleInput.bind( this );
			this.onRegisterInput = this.onRegisterInput.bind( this );
			this.state = {
				showInputPopover: false,
			};
		}

		onToggleInput() {
			const { isActive, onChange, value } = this.props;
			if ( isActive ) {
				onChange( removeFormat( value, inputFormat ) );
			} else {
				this.setState( { showInputPopover: true } );
			}
		}

		onRegisterInput( inputName ) {
			const { onChange, value } = this.props;
			onChange(
				applyFormat( value, {
					type: inputFormat,
					attributes: {
						inputname: inputName,
					},
				} )
			);
			this.setState( { showInputPopover: false } );
		}

		render() {
			const { isActive } = this.props;
			const { showInputPopover } = this.state;

			return (
				<Fragment>
					<RichTextToolbarButton
						icon="edit"
						isActive={ isActive }
						title="Edit"
						onClick={ this.onToggleInput }
					/>
					{ showInputPopover ? (
						<InputNamePopover onUpdateInputName={ this.onRegisterInput } />
					) : null }
				</Fragment>
			);
		}
	}

	registerFormatType( inputFormat, {
		title: 'Edit',
		tagName: 'span',
		attributes: {
			inputname: 'data-reactivedocs-input',
		},
		className: 'reactivedocs-input',
		edit: EditComponent,
	} );
})( window.wp );
