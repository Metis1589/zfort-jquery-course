var minHeight = 250;
var minWidth = 250;

var ajaxDomain = 'http://zfort-internship.com';
var ajaxUrl = ajaxDomain + '/index.php';
var ajaxUrlJSONP = ajaxDomain + '/index-jsonp.php';

var imgs = document.getElementsByTagName('img');
for(var i=0, l = imgs.length; i<l; i++){
    var image = imgs[i];
    if(image.naturalHeight >= minHeight && image.naturalWidth >= minWidth){
        var buyImage = document.createElement('img');
        buyImage.src = 'images/buy.jpg';
        buyImage.style.cursor = 'pointer';
        //buyImage.style.position = 'absolute';
        //buyImage.style.right = '5px';
        //buyImage.style.top = '5px';

        buyImage.addEventListener('click', function(event){
            var imgs = event.target.parentNode.childNodes;
            for(var i=0, j = imgs.length; i<j; i++){
                if(imgs[i].tagName == 'IMG'){
                    var imageUrl = imgs[i].src;
                    //sendAjaxJSONPRequest(imageUrl);
                    //sendAjaxRequest(imageUrl);
                    //sendAjaxPureRequest(imageUrl);
                    break;
                }
            }
        });

        image.addEventListener('mouseover', function(event){
            event.target.style.opacity = 0.3;
        });

        image.addEventListener('mouseout', function(event){
            event.target.style.opacity = 1;
        });

        image.parentElement.appendChild(buyImage);

        //image.style.position = 'relative';
    }
}

function sendAjaxJSONPYQLRequest(query){
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
        // Tell YQL what we want and that we want JSON
        data: {
            q: query,
            format: "json"
        },
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });
}

function sendAjaxJSONPRequest(url) {
    // Task 1. Place your code here.
}
function sendAjaxRequest(url) {
    // Task 2. Place your code here.
}
function sendAjaxPureRequest(url) {
    // Task 3. Place your code here.
}



