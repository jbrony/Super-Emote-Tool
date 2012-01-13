function display_emotes(element){
	/* Sets the iframe to the appropriate web page
	depending on the subreddit clicked.
	*/
	var subreddit = $(element).text();
	
	var url = 'emotes/' + subreddit + '.html';
	$("#emotetables").css("height", '0').attr("src", url);
	$("#contentarea").hide();
}