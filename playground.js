var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open("GET", "http://www.simpleyin.xyz", true);
httpRequest.send();
httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
httpRequest.onreadystatechange = function() {
    if (this.readyState === 0) {
        //UNSENT, request not initialized, open() not called yet
        console.log(0);
    }
    else if (this.readyState === 1) {
        //OPENED, server connection established, open() has been called
        console.log(1);
    }
    else if (this.readyState === 2) {
        //HEADERS_RECEIVED, request received, 
        console.log(2);
    }
    else if (this.readyState === 3) {
        //LOADING, processing request, Downloading, responseText holds partial data.
        console.log(3);
    }
    else if (this.readyState === 4) {
        //request finished and response is ready
        console.log(4);
    }
};