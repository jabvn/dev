$(document).ready(function () {
	var sheet='1pcTgSycYdDP3ZLNYC7zg_ccrTD_xVuxhNNN45c5M1Hc/1';
	var jsonUrl = 'https://spreadsheets.google.com/feeds/list/'+sheet+'/public/full?alt=json';
	$.getJSON(jsonUrl, function(data){
		var entry = data.feed.entry;
		$.each(entry, function (i, data) {
		//$(entry).each(function() {
			$('.blog-main').prepend('<div id="entry'+i+'" class="-blog-post hidden"></div>');
			$('#entry'+i).append('<h2 class="blog-post-title"><a href="#block'+i+'" aria-controls="block'+i+'" data-toggle="collapse" aria-expanded="false">'+data.gsx$title.$t+'</a></h2>');
			$('#entry'+i).append('<span class="-blog-post-meta"><i>'+data.gsx$timestamp.$t+'</i></span>');
			$('#entry'+i).append('<p>'+data.gsx$seeless.$t+'</p>');
			$('#entry'+i).append('<div id="block'+i+'" class="collapse">'+data.gsx$seemore.$t+'</div>');
			
			if (i<3){loadMore();}
		});
	})//getJSON
	$('.blog-main').append('<nav class="blog-pagination text-right"><a id="btnLoadMore" class="btn btn-outline-primary">Load more</a></nav>');
    
	function loadMore(){
        $(".blog-main .hidden").slice(0,3).removeClass("hidden");
	}
	$("#btnLoadMore").on("click",loadMore);
});//doc end
