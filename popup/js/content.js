chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "unfollow"){
    	openFollowersWindow().then(function () {
		    populateUnfollowsPool();
		    digestUnfollowsPool();
		});
 
		function openFollowersWindow() {
		    var onFollowersWindowWasOpenedListeners = [];
		    var openWindowTimeout = 3000;
		 
		    var followersElement = getFollowersElement();
		    followersElement.click();
		 
		    function digestOnFollowersWindowWasOpenedListeners() {
		        onFollowersWindowWasOpenedListeners.forEach(function (onFollowersWindowWasOpenedListener) {
		            onFollowersWindowWasOpenedListener();
		        });
		    }
		 
		    var wasOpened;
		    setTimeout(function () {
		        // TODO Verify that the window was indeed opened
		        wasOpened = true;
		        digestOnFollowersWindowWasOpenedListeners();
		    }, openWindowTimeout);
		    return {
		        then: function (onFollowersWindowWasOpened) {
		            if (wasOpened) {
		                onFollowersWindowWasOpened();
		            } else {
		                onFollowersWindowWasOpenedListeners.push(onFollowersWindowWasOpened);
		            }
		        }
		    };
		}
		 
		function getFollowersElement() {
		    return getFollowersElementWithUsername(getUsername());
		}
		 
		function getUsername() {
		    var pageTitleElement = document.getElementsByTagName('h1')[0];
		    if (!pageTitleElement) throw new Error('No title to get username from');
		    return pageTitleElement.innerHTML;
		}
		 
		function getFollowersElementWithUsername(username) {
		    var followersElement = document.querySelectorAll('a[href="/' + username + '/following/"]')[0];
		    if (!followersElement) throw new Error('No followers element was found');
		    return followersElement;
		}
		 
		var unfollowsPool;
		 
		function populateUnfollowsPool() {
		    var buttons = document.getElementsByTagName('button');
		    unfollowsPool = [];
		    for (var i = 0; i < buttons.length; i++) {
		        var button = buttons[i];
		        if (button.innerHTML.includes('Following')) {
		            var randomTimeoutForUnfollow = Math.floor((Math.random() * 10) + 1) * 1000;
		            console.log('Following button!');
		            var unfollow = {
		                buttonElement: button,
		                timeout: randomTimeoutForUnfollow
		            };
		 
		            unfollowsPool.push(unfollow);
		        }
		    }
		}
		 
		function digestUnfollowsPool() {
		    if (unfollowsPool.length === 0) {
		        console.log('Unfollow pool empty, repopulating');
		        populateUnfollowsPool();
		    }
		    var unfollow = unfollowsPool.shift();
		    // if (unfollow.timeout) {var unfollowTimeout = unfollow.timeout; console.log(unfollow.timeout)}else{
		    	var unfollowTimeout = Math.floor((Math.random() * 10) + 1) * 6000;
		    // }
		    console.log('Clicking unfollow button in ', unfollowTimeout);
		    setTimeout(function () {
		        var unfollowButtonElement = unfollow.buttonElement;
		        unfollowButtonElement.scrollIntoView(true);
		        console.log('Clicking unfollow button');
		        unfollowButtonElement.click();
		        console.log('Clicked. Continuing digesting unfollow pool');
		        digestUnfollowsPool();
		    }, unfollowTimeout);
		}
	}







	//FACEBOOK
	if (request.greeting == "invite") {
		console.log("fb");
		jQuery(document).ready(function($) {
			$('._2x4v').click(

			);
		});

		// jQuery(document).ready(function($) {			
		// 	$('._2x4v').click(function(event) {
				
		// 		var count=0;
		// 		//auto invite by http://facebook.com/lephanductrong
		// 		function clickInvite(){

		// 			if(document.querySelectorAll('a._42ft[ajaxify^="/ajax/pages/invite/send_single"]').length>0) {
		// 				if(document.querySelector('.uiScrollableArea a.uiMorePagerPrimary')){

		// 					document.querySelector('.uiScrollableArea a.uiMorePagerPrimary').click();
		// 				}
		// 			  document.querySelectorAll('a._42ft[ajaxify^="/ajax/pages/invite/send_single"]')[0].click();
		// 			  setTimeout(clickInvite,2000); //2000 là thông số timeout cho 1 click , bạn nào muốn nhanh thì chỉnh thấp xuống
		// 			  count++; console.log(count)
		// 			}
		// 			else{
		// 			 count=0;
		// 			 if(confirm('Chay xong ! Reload lai trang ?'))
		// 			  window.location.reload()
		// 			}
		// 		}

		// 		setTimeout(function(){
		// 			clickInvite()
		// 		},5000);
		// 		console.log('click');
		// 	});
		// });
	}

  });
