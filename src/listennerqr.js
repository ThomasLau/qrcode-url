//document.addEventListener('DOMContentLoaded', 
$(document).ready(function () {
	var detail = chrome.extension.getBackgroundPage().Detail;
	var qrcode = new QRCode(document.getElementById("qrcode"),{//it seems that here can't use jquery selector...why qrcode take it as a pure dom?
		width : 150,
		height : 150
	});
	if(detail.status){
		qrcode.makeCode(detail.url);
	}
});