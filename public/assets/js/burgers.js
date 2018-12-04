$(function(){
	$(".devour-burger").on("click", function(event){
        var id = $(this).data("id");
        
		// Send the PUT request to move burger to devoured list
		$.ajax("/api/burgers/"+id, {
			type: "PUT",
			data: id
		}).then(function(){
			location.reload();
		})
	});

});