describe( 'Block settings menu', () => {
	it( 'contains a new item added by this plugin', async () => {
		const page = await browser.newPage();
		await page.goto( 'http://localhost:8889/wp-admin/post-new.php', {
			timeout: 5000,
		} );
		expect( false ).toBe( true );
	} );
} );
