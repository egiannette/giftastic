var topics = ["bobs burgers", "golden girls", "scooby doo"];
var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

for(var i=0; i< topics.length;i++){
    var button = $('<input type="button" value="' + topics[i] + '" + data-show class="showImage" />');
    $("#buttons").append(button);
    

}



$('.showImage').on('click', function() {
    var myQueryUrl = queryURL + $(this).attr('value');
    console.log(myQueryUrl);

    $.ajax({url: myQueryUrl, method: 'GET'})

            // When its finished getting the query. 
            .done(function(response) {

                // Setting the variable of image_url to the specific object 
                var imageUrl = response.data.image_original_url;

                // Created a variable called show image
                var showImage = $("<img>");
                
                // Given the catImage the source path and an alt tag (screen readers). 
                showImage.attr('src', imageUrl);
                showImage.attr('alt', 'show image');

                // Adding images before the content that's there 
                $('#gifsGoHere').prepend(showImage);
            });

});
       
