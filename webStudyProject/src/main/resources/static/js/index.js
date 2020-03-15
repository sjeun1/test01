$(document).ready(function () {
	$('#testbutton').on('click', function(event) {
		event.preventDefault(); // To prevent following the link (optional)
		fetchItems();
	});
	
	fetchItems() {
		alert('test....^^');
	}
});