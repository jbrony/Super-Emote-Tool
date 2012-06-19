// Executes when the DOM is fully loaded.
$(document).ready(function(){
  // Automatically binds the subredditmenu links to the
  // JavaScript function to load their data.
  // The html file to link to should be located in the /emotes folder
  // with the same name as the text of the link.
  // So <a>mylittlepony</a> would link to:
  // /emotes/mylittlepony.html.
  $("#subredditmenu").find("a").attr("src", '#').click(function() {
    // Sets the iframe to the appropriate web page
    // depending on the subreddit clicked.
    var url = 'emotes/' + $(this).text() + '.html';

    $("#emotetables").css("height", '0').attr("src", url);
    $("#contentarea").hide();
    return false;
  });

  // Fires when the load finishes on the iframe.
  $("#emotetables").load(function(){
    // Resize the iframe to the appropriate height.
    $(this).height($(this).contents().height());
    // Remove the link from the emotes.
    $(this).contents().find(".t a").click(function(){
      return false;
    }).each(function(){
      // Add the mouse over text.
      $(this).attr("title", $(this).attr("href"));
    });
  });
});
