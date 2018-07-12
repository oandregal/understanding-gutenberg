(function( wp ) {
    function fillBlockSettingsMenuSlot() {
        return wp.element.createElement( wp.components.Fill, { name: 'BlockSettingsMenuPluginsSlot' }, 'howdy' );
    }
    wp.plugins.registerPlugin( 'blocksettingsmenu-plugin', {
        render: fillBlockSettingsMenuSlot,
    });
})( window.wp );
