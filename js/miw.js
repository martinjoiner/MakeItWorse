(function(d){ 

	var head = d.getElementsByTagName('head')[0];
	var cssLink = d.createElement('link');
	cssLink.setAttribute('href','http://localhost/book/css/crap.css');
	cssLink.setAttribute('rel','stylesheet');
	head.appendChild(cssLink);

	var objHeader1s = d.getElementsByTagName('h1');
	var arrHeaders = [].slice.call(objHeader1s,0);
	
	for(var i=0, n=arrHeaders.length; i<n; i++){
		arrHeaders[i].className = arrHeaders[i].className + ' shith1';
		arrHeaders[i].innerHTML = '<marquee>'+arrHeaders[i].innerHTML+'</marquee>';
		
	}

}(document))