var app = {};

app.apiUrl = 'https://api.petfinder.com/pet.find';
app.apiKey = '1a078cca6761bc35ee77468fb93b2b46';
app.apiToken = '97d3ac7d98ca5dabf4767cc3b6c9a1ef';

// get information from petfinder API
// app.ajaxCall = function() {
// 	$.ajax({
// 		url: app.apiUrl,
// 		dataType: 'jsonp',
// 		method: 'GET',
// 		data: {
// 			key: app.apiKey,
// 			animal: petType,
// 			age: 'Senior',
// 			// breed: breed ||
// 			// sex: sex,
// 			format: 'json',
// 			status: 'A',
// 			location: '94115'
// 		}
// 	}).then(function(res) {
// 		 console.log(res.petfinder.pets);
// 	})
// };


// var petType = $("form input[name=petType]:checked").val();
var breed = $("#petBreed").val();
var size = $("#petSize").val();
var sex = $("#petGender").val();
var location = $("#userLocation").val();

// if (size == "petSizeAny") {
// 	size = undefined;
// };
//
// if (sex == "petGenderEither") {
// 	sex = undefined;
// }

// if ($("#noBreedPreference"):checked)


$("#petFindButton").on("click", function(e){
	e.preventDefault();
	console.log(petType);
	console.log(breed);
	console.log(size);
	console.log(sex);
	console.log(location);
	// app.ajaxCall();
})
