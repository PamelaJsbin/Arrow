// 100 most dangerous websites > banned URLs
var bannedURLs = [
	17ebook.com, aladel.net, bpwhamburgorchardpark.org, clicnews.com, dfwdiesel.net, divineenterprises.net, fantasticfilms.ru, gardensrestaurantandcatering.com, ginedis.com, gncr.org, hdvideoforums.org, hihanin.com, kingfamilyphotoalbum.com, likaraoke.com, mactep.org, magic4you.nu, marbling.pe.kr, nacjalneg.info, pronline.ru, purplehoodie.com, qsng.cn seksburada.net, sportsmansclub.net, stock888.cn, tathli.com, teamclouds.com, texaswhitetailfever.com, wadefamilytree.org, xnescat.info, and yt118.com
]

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	for (var i = 0; i < bannedURLs.length; i++) {
		if (tab.url.indexOf(bannedURLs[i]) > -1) {
	    // ... show the page action.
	    chrome.pageAction.show(tabId);
	    chrome.tabs.remove(tabId);
	  	}
	}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   alert(changeInfo.url);
});
