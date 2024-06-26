import $ from './lib/lib';

$('#first').on('click', () => {
	$('div').eq(0).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
	$('div').eq(1).fadeToggle(800);
});

$('button')
	.eq(2)
	.on('click', () => {
		$('.w-500').fadeToggle(800);
	});
