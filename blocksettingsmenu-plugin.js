( function( wp ) {
    function fillBlockSettingsMenuSlot( ) {
        return wp.element.createElement(
            wp.editor.BlockSettingsMenuPluginsItem,
            {
                icon: 'screenoptions',
                label: 'My new plugin',
                onClick: function( uid ) {
                    console.log( 'Block UID is ', uid );
                }
            },
            null,
        );
    }
    wp.plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
} )( window.wp );
