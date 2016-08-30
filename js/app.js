$(document).foundation();

$(document).on('ready', function(){

	function sendWithAjax(password) {
		
		$.ajax({
			type: "post",
			data: {
				login: "efi",
				password: password
			},
			url: "https://efigence-camp.herokuapp.com/api/login",
			error: function(response) {
				console.log(response.responseText);
			},
			success: function(response) {
				console.log(response);
			}
		});
	}

	$(".go-btn").on("click", function(event) {
		event.preventDefault();
		var inputValue = $('input#login').val();
		sendWithAjax(inputValue);
	});


	function getMoneyDataWithAjax(endpoint, callback) {
		
		$.ajax({
			type: "get",
			url: "https://efigence-camp.herokuapp.com/api/"+endpoint,
			error: function(response) {
				console.log(response.responseText);
			},
			success: function(response) {
				callback(response);
			}
		});
	}

getMoneyDataWithAjax( "data/summary", function(response) {

	$("#balance").append("<strong>" + response.content[0].balance +"</strong>" + " PLN");
	$("#funds").append("<strong>" + response.content[0].funds +"</strong>" + " PLN");
	$("#payments").append("<strong>" + response.content[0].payments +"</strong>" + " PLN");

});

});
