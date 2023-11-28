(function (wp) {
    var addFilter = wp.hooks.addFilter;
    var selectFrom = wp.data.select;
    const blockEditorStore = 'core/block-editor';

    addFilter(
        'blockEditor.useSetting.before',
        'example/useSetting.before',
        (settingValue, settingName, clientId, blockName) => {
            if (
                settingName !== 'color.palette.theme' ||
                blockName !== 'core/paragraph'
            ) {
                return settingValue;
            }

            const { getBlockParents, getBlockName } =
                selectFrom(blockEditorStore);
            const blockParents = getBlockParents(clientId, true);
            const inQuote = blockParents.some(
                (ancestorId) => getBlockName(ancestorId) === 'core/quote'
            );
            if (inQuote) {
                const settings = selectFrom(blockEditorStore).getSettings();
                return settings.__experimentalFeatures?.blocks?.['core/quote']?.[
                    'core/paragraph'
                ]?.color?.palette?.theme;
            }

            return settingValue;
        }
    );
})(window.wp);
