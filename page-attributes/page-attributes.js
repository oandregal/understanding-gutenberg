( function() {
	var PanelBody = wp.components.PanelBody;
	var PanelRow = wp.components.PanelRow;
	var withSelect = wp.data.withSelect;
	var dispatch = wp.data.dispatch;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;

	var PageAttributesCheck = wp.editor.PageAttributesCheck;
	var PageTemplate = wp.editor.PageTemplate;
	var PageAttributesParent = wp.editor.PageAttributesParent;
	var PageAttributesOrder = wp.editor.PageAttributesOrder;

	function SidebarContents( props ) {
		return el(
			PanelBody,
			{},
			el(
				PageTemplate,
			),
			el(
				PageAttributesParent,
				{
					items: props.parentItems,
				}
			),
			el(
				PanelRow,
				{},
				el(
					PageAttributesOrder,
				)
			)
		);
	}

	var SidebarContentsWithDataHandling = withSelect( function( select ) {
		var selectCore = select( 'core' );
		var selectEditor = select( 'core/editor' );

		var postTypeSlug = selectEditor.getEditedPostAttribute( 'type' );
		var postType = selectCore.getPostType( postTypeSlug );
		var postId = selectEditor.getCurrentPostId();
		var isHierarchical = postType && postType.hierarchical;
		var query = {
			per_page: -1,
			exclude: postId,
			parent_exclude: postId,
			orderby: 'menu_order',
			order: 'asc',
			status: 'publish,future,draft,pending,private',
		};
		return {
			parentItems: isHierarchical ?
				selectCore.getEntityRecords( 'postType', postTypeSlug, query ) :
				[]
		};
	} )( SidebarContents );

	function CustomPageAttributesPlugin() {
		return el(
			PageAttributesCheck,
			{},
			el(
				PluginSidebar,
				{
					name: 'page-attributes',
					title: __( 'Page Attributes' ),
				},
				el(
					SidebarContentsWithDataHandling,
					{}
				)
			),
			el(
				PluginSidebarMoreMenuItem,
				{
					target: 'page-page'
				},
				__( 'Page Attributes' )
			)
		);
	}

	// Register a plugin that adds a custom sidebar to deal with page attributes.
	registerPlugin( 'my-page-attributes-plugin', {
		icon: 'text',
		render: CustomPageAttributesPlugin
	} );

	// Remove the default page attributes panel.
	dispatch( 'core/edit-post' ).removeEditorPanel( 'page-attributes' );
} )();