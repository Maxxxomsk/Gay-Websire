function getApiData(){
	let count = prompt("Сколько имен?");
	let sx = $(".btn-group input[type='radio']:checked").val()
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "api/api.php?count="+count+"&sx="+sx,
		"method": "GET"
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		})};

function fun1(){
	$('#ex1').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});
}
function searchMovie(){
	let search = $("#search").val();
	let date = $("#date").val();
	let select = $("#genre").val();
	let rating = $("#range").val();
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://imdb8.p.rapidapi.com/title/v2/find?title="+search+"&userRatingMin="+rating+"&genre="+select+'&releaseDateMin='+date,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "df49023b2emsh08837175906a2edp1a5361jsn5caab0f42fab",
			"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log("Works!");
		$("#results").empty();
		let titleList = response;
		for(i=1; i<20; i++) {
            let aadfgasf = titleList['results'][i]['title'];
			let rating = titleList['results'][i]['titleType'];
			let year = titleList['results'][i]['year'];
			let authors = titleList['results'][i]['image']['url'];
		console.log(titleList);
		let html = `<div class="card movie-card" style="width: 18rem;">
		<img src="`+authors+`" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">`+aadfgasf+`</h5>
			<p class="card-text">`+'Type: '+rating+'<br> Год: '+year+`</p>
			<a href="`+authors+`" class="btn btn-primary">Go tracks-tracks</a>
			</div>
		</div>`
		$("#results").append(html);
		console.log(html);
		console.log() 
	}});
}