( function( wp ) {
    wp.plugins.registerPlugin( 'my-plugin-sidebar', {
        render: function(){
            return wp.editPost.PluginSidebar( {
                icon: 'admin-post',
                name: 'my-plugin-sidebar',
                title: 'My plugin sidebar',
                children: "Plugin sidebar's content",
            } );
        },
    } );
} )( window.wp );
