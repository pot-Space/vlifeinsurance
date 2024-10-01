$(document).ready(() => {
	$('[data-id="onSubscribe"]').on('click', () => {
		$('[data-id="onSubscribe"]')
			.parent()
			.html('<p>Bedankt voor het inschrijven</p>')
	})
})
