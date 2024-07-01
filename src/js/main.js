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

$('#trigger').click(() =>
	$('#trigger').createModal({
		text: {
			title: 'Modal title',
			body: 'loremipsum dol amrot damammamm ren quam lss sota man',
		},
		btns: {
			count: 3,
			settings: [
				['Close', ['btn-danger', 'mr-10'], true],
				[
					'Save changes',
					['btn-success'],
					false,
					() => {
						alert('Data has been saved');
					},
				],
				[
					'Another button',
					['btn-warning', 'ml-10'],
					false,
					() => console.log('warning'),
				],
			],
		},
	})
);
