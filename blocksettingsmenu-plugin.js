( function( wp ) {
    function fillBlockSettingsMenuSlot( ) {
        return wp.element.createElement(
            wp.editor.BlockSettingsMenuPluginsItem,
            {
                icon: 'screenoptions',
                label: 'My new plugin'
            },
            null,
        );
    }
    wp.plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
} )( window.wp );
