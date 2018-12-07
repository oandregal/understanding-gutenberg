( function( wp ) {
    function fillBlockSettingsMenuSlot( ) {
        return wp.element.createElement(
            wp.editPost.PluginBlockSettingsMenuItem,
            {
                icon: 'screenoptions',
                label: 'My new plugin',
                allowedBlocks: [ 'core/paragraph' ],
                onClick: function( ) {
                    console.log( 'Block clicked ' );
                }
            },
            null,
        );
    }
    wp.plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
} )( window.wp );
