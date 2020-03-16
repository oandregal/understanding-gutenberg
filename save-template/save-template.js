( function( element, editPost, plugins ) {
    function fillBlockSettingsMenuSlot( ) {
        return element.createElement(
            editPost.PluginBlockSettingsMenuItem,
            {
                icon: 'screenoptions',
                label: 'Save template',
                onClick: function( ) {
                    console.log( 'Template saved' );
                }
            },
            null,
        );
    }
    plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
} )( window.wp.element, window.wp.editPost, window.wp.plugins );
