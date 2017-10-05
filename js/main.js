$(document).ready(function(){
 // external links handling
  $("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])")
  .addClass("external")  // add css class 'external' to all external links
  .attr("target", "_blank") // open all external links in new window
  .attr("title", "Opens in new window/tab"); // Change title to show opening in new window
 // breaks things .attr("rel","external"); // add rel=external in html
  
  // force PDF Files to open in new window
  $('a[href$=".pdf"]').attr('target', '_blank');

 // Add font awsome external indicator to all external elements
  $(".external").append("<i class='fa fa-external-link' aria-hidden='true'></i>");


});
