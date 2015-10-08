$(document).ready(function(){
	$('#myTabs a').click(function (e) {
	 	e.preventDefault()
		$(this).tab('show')
	})	
})

/*

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

*/