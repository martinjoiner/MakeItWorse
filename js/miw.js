(function(d){ 

	var head = d.getElementsByTagName('head')[0];
	var cssLink = d.createElement('link');
	cssLink.setAttribute('href','http://makeitworse.local/css/crap.css');
	cssLink.setAttribute('rel','stylesheet');
	head.appendChild(cssLink);

	var objHeader1s = d.getElementsByTagName('h1');
	var arrHeaders = [].slice.call(objHeader1s,0);

	for(var i=0, n=arrHeaders.length; i<n; i++){
		arrHeaders[i].className = arrHeaders[i].className + ' shith1';
		var innerHTML = arrHeaders[i].innerHTML;
		innerHTML = innerHTML.replace(/<[^<>]*>/g,''); // Strip out any internal tags
		innerHTML = innerHTML.replace('o','<i class="inlineglobe"></i>');
		
		arrHeaders[i].innerHTML = '<marquee>'+innerHTML+'</marquee>';
		
	}

}(document))