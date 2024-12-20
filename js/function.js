$(function () {
	$('.ef-masked').css({
		'opacity': 0
	});
	$('.js-inview').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).addClass('is-animated');
			var maskobj = $('<span class="ef-mask"></span>').velocity({
				width: '100%',
			}, {
				duration: 500,
				easing: 'ease-in-out',
				complete: function () {
					$(this).prevAll().css({
						'opacity': 1
					});
				}
			}).velocity({
				translateX: '100%',
			}, {
				duration: 500,
				easing: 'ease-in-out',
				complete: function () {
					$(this).remove();
				}
			});
			$(this).find('.ef-mask-wrap').append(maskobj);
		}
	});
});