var Detail = {"status": false,"url": ""};
var genQrcode = function(tabid) {
	chrome.tabs.get(tabid, function(tab) {
	if (tab.url && tab.url.substr(0, 4)=='http') {
		Detail.url = tab.url;
		Detail.status = true;
		chrome.pageAction.show(tab.id);
	} else {
		chrome.pageAction.hide(tab.id);
	}
	});
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	genQrcode(tabId);
});
chrome.tabs.onActivated.addListener(function(activateInfo) {
	genQrcode(activateInfo.tabId);
});