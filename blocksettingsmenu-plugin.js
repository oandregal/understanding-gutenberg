( function( wp ) {
    function fillBlockSettingsMenuSlot( ) {
        return wp.element.createElement( wp.editor.BlockSettingsMenuPluginsGroup, null, 'heya' );
    }
    wp.plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
} )( window.wp );
