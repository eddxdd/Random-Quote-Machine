$(document).ready(function() {

$("#getQuote").on('click', function() {

  $.ajaxSetup({cache: false});

  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {

    $(".message").html(data[0].content + "~" + data[0].title)
});// end of getJSON

}); // end of getQuote function

}); //end
