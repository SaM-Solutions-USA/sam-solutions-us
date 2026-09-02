(function($) {
    if(window.acf) {
        window.acf.addAction('load_field/name=block_set', function(field) {
            $(field.$el[0]).find('.acf-fc-layout-handle').each(function() {
                const handle            = $(this),
                      handleLayout      = handle.parent(),
                      handleLayoutTitle = handleLayout.find('.acf-fields').find('.acf-field[data-name="title"] input');
 
				let handleText = handle.html();

                if(handleLayoutTitle.val()) {
                    handle.html(handleText + ' - ' + handleLayoutTitle.val());
                }
            });
        });
        window.acf.addAction('load_field/name=case-studies_block_set', function(field) {
            $(field.$el[0]).find('.acf-fc-layout-handle').each(function() {
                const handle            = $(this),
                      handleLayout      = handle.parent(),
                      handleLayoutTitle = handleLayout.find('.acf-fields').find('.acf-field[data-name="title"] input');
 
				let handleText = handle.html();

                if(handleLayoutTitle.val()) {
                    handle.html(handleText + ' - ' + handleLayoutTitle.val());
                }
            });
        });
    }
})(jQuery);