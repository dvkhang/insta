$("#unfollow").click(function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		    var url = tabs[0].url;
		    if (url.includes("instagram") == true) {
		    		console.log(url.includes("instagram"));
			    chrome.tabs.sendMessage(tabs[0].id, {greeting: "unfollow"}, function(response) {
			    // console.log(response.farewell);
			  });
		    }    	
		});
	});
});

$("#invite").click(function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		    var url = tabs[0].url;
		    if (url.includes("facebook") == true) {
		    		console.log(url.includes("facebook"));
			    chrome.tabs.sendMessage(tabs[0].id, {greeting: "invite"}, function(response) {
			    // console.log(response.farewell);
			  });
		    }	    	
		});
	});
});