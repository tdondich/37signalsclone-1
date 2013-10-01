$(document).ready(function() {

    $(".product").hover(function() {
        var selector = $(this).attr('data-target');
        console.log("Hey, you hovered over a product!");
        $('.header').hide();
        $(selector).show();
    }, function() {
        var selector = $(this).attr('data-target');
        console.log("Hey, you hovered OUT of the product.");
         $('.header').hide();
         $('#default').show();
    });
});	
	

	





