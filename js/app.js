;(function ($, document, window) {
	$(document).ready(function () {
		// Cloning main navigation for mobile menu
		$('.mobile-navigation').append($('.main-navigation .menu').clone())

		// Mobile menu toggle
		$('.menu-toggle').click(function () {
			$('.mobile-navigation').slideToggle()
		})

		$('.offer img, .news img').panr({
			sensitivity: 15,
			scale: false,
			scaleOnHover: true,
			scaleTo: 1.2,
			scaleDuration: 0.25,
			panY: true,
			panX: true,
			panDuration: 1.25,
			resetPanOnMouseLeave: false,
		})

		// current date for copyright
		if ($('[data-id="currentDate"]')) {
			const today = new Date()
			$('[data-id="currentDate"]').html(today.getFullYear())
		}

		// $('.testimonial-slider, .hero-slider').flexslider({
		// 	directionNav: false,
		// 	controlNav: true,
		// })

		// if ($('.map').length) {
		// 	$('.map').gmap3(
		// 		{
		// 			map: {
		// 				options: {
		// 					maxZoom: 14,
		// 					scrollwheel: false,
		// 				},
		// 			},
		// 			marker: {
		// 				address: 'Chau. de Roodebeek 206, 1200 Bruxelles, België',
		// 				options: {
		// 					icon: new google.maps.MarkerImage(
		// 						'images/map-marker.png',
		// 						new google.maps.Size(43, 53, 'px', 'px')
		// 					),
		// 				},
		// 			},
		// 		},
		// 		'autofit'
		// 	)
		// }

		if ($('.map').length) {
			var map = new google.maps.Map(document.querySelector('.map'), {
				center: { lat: 50.8503, lng: 4.3517 }, // Установи правильные координаты центра
				zoom: 14,
				scrollwheel: false,
			})

			var marker = new google.maps.Marker({
				position: { lat: 50.8503, lng: 4.3517 }, // Установи координаты метки
				map: map,
				icon: {
					url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					size: new google.maps.Size(43, 53),
				},
			})
		}
	})

	$(window).load(function () {})
})(jQuery, document, window)
