$(function () {
	var sheet='1pcTgSycYdDP3ZLNYC7zg_ccrTD_xVuxhNNN45c5M1Hc/2';
	var jsonUrl = 'https://spreadsheets.google.com/feeds/list/'+sheet+'/public/full?alt=json';
	$.getJSON(jsonUrl, function(data){
		var entry = data.feed.entry;
		//console.log(entry.length);
		$.each(entry, function (i,e) {
			$('.blog-main').prepend('<div id="entry'+i+'" class="blog-post hidden"></div>');
			$('#entry'+i).append('<h2 class="blog-post-title"><a href="#block'+i+'" aria-controls="block'+i+'" data-toggle="collapse" aria-expanded="false">'+e.gsx$title.$t+'</a></h2>');
			$('#entry'+i).append('<span class="blog-post-meta"><i>'+e.gsx$timestamp.$t+'</i></span>');
			$('#entry'+i).append('<div>'+e.gsx$seeless.$t+'</div>');
			$('#entry'+i).append('<div id="block'+i+'" class="collapse text-justify">'+e.gsx$seemore.$t+'</div>');
			if(i == (entry.length - 1)){loadMore();}
		});
	})//getJSON

	$('#txtSeeMore').summernote({
		placeholder: 'Write here ...',
		height: 100,
		tabsize: 2
	});
	//$('#my-summernote2').summernote({airMode: true,placeholder:'Try the airmode'});
	guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	//alert(guid);
	$('#guid').val(guid);
});//doc end
function S4() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function formOK() {
	if (confirm("Tốt lắm! Đợi duyệt....")) {
		window.location.href=window.location.href;
	}
}
function loadMore(){
	$(".blog-main .hidden").slice(0,2).removeClass("hidden");
}
$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		loadMore();
	}
});