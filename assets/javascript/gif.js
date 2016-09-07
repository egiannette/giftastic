var topics = ["bobs burgers", "golden girls", "scooby doo"];
var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=10";

for(var i=0; i< topics.length;i++){
    var button = $('<input type="button" value="' + topics[i] + '" + data-show class="showImage" />');
    $("#buttons").append(button);

    //alert(topics[i].rating);

   
}

$('#submitbtn').on('click',function(){
    // preventDefault();
    var userinput = $('#show').val();
    var button = $('<input type="button" value="' + userinput + '" + data-show class="showImage" />');
    $('#buttons').append(button);
    topics.push(userinput);

});

$("#gifsGoHere").on("click", ".showImage", function() {
        alert("in here");
        var myQueryUrl = queryURL + $(this).attr("value");
        console.log(myQueryUrl);

    for(var i = 0; i < 10; i++){
        $.ajax({url: myQueryUrl, method: 'GET'})

            // When its finished getting the query. 
            .done(function(response) {
                //var results = response.data;

                
                // Setting the variable of image_url to the specific object 
                var imageUrl = response.data.image_original_url;
                

                //var rating = response.data.rating;
                
                //console.log(rating);

                // Created a variable called show image
                var showImage = $("<img>");
                
                // Given the catImage the source path and an alt tag (screen readers). 
                showImage.attr('src', imageUrl);
                showImage.attr('alt', 'show image');

                // Adding images before the content that's there 
                $('#gifsGoHere').prepend(showImage);
            
        });
    }
});



// making an if statment to check the ratings and post them.

$('.showImage').on('click', function() {
    
        var myQueryUrl = queryURL + $(this).attr("value");
        console.log(myQueryUrl);

    for(var i = 0; i < 10; i++){
        $.ajax({url: myQueryUrl, method: 'GET'})

            // When its finished getting the query. 
            .done(function(response) {
                //var results = response.data;

                
                // Setting the variable of image_url to the specific object 
                var imageUrl = response.data.image_original_url;
                

                //var rating = response.data.rating;
                
                //console.log(rating);

                // Created a variable called show image
                var showImage = $("<img>");
                
                // Given the catImage the source path and an alt tag (screen readers). 
                showImage.attr('src', imageUrl);
                showImage.attr('alt', 'show image');

                // Adding images before the content that's there 
                $('#gifsGoHere').prepend(showImage);
            
        });
    }
});
       
