// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
});

var navHolder = $(".collapse ul.nav");
var pathname = window.location.hash;
var completePath = window.location.href;

navHolder.find("li").each(function(){
	var el = $(this);
	el.on("click", function(){
		navHolder.find("li.active").removeClass("active");
		el.addClass("active");
	});
});

navHolder.find("li a").each(function(){
	if (completePath.indexOf("index") > 1){
		var txt;
		if (!pathname){
			pathname = '#';
			txt = '#';
		} else {
			txt = '#'+$(this).text();
		}
		txt = txt.replace(/\s+/g, '-').toLowerCase();
		if (pathname.toUpperCase() === txt.toUpperCase()){
			$(this).parent().addClass("active");
		} else {
			$(this).parent().removeClass("active");
		}
	}
});

$('body').scrollspy({ target: '#navbar' })