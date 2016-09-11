var topics = ["bobs burgers", "golden girls", "scooby doo","the office","i love lucy","dr pol"];
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=10&q=";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=";



// $('#show').stop('stopAll')

for(var i=0; i< topics.length;i++){
    var button = $('<input type="submit" value="' + topics[i] + '"class="showImage" />');
    $("#buttons").append(button);

    //alert(topics[i].rating);

   
}
$('#ratings')

$('#submitbtn').on('click',function(){
    // preventDefault();
    var userinput = $('#show').val();
    var button = $('<input type="submit" value="' + userinput + '"class="showAddedImage" />');
    $("#buttons").append(button);
    topics.push(userinput);

});


$('#gifsGoHere').on('click', '.tvImage', function(){
    var state = $(this).attr('data-state'); 
    console.log("state is " + state);
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})


// making an if statment to check the ratings and post them.


$('.showImage').on('click', gifBtn);
$('#buttons').on('click','.showAddedImage',gifBtn);

function gifBtn() {
    $("#gifsGoHere").empty();
    var myQueryUrl = queryURL + $(this).attr("value")+ "&api_key=dc6zaTOxFJmzC&limit=10&q=";
    console.log(myQueryUrl);

    
    $.ajax({url: myQueryUrl, method: 'GET'})

    // When its finished getting the query. 
    .done(function(response) {
        var results = response.data;

        for (var i=0; i < results.length; i++) {
            if (results[i].rating == "r" || results[i].rating == "pg-13"){

            }
            else{
                var rating = results[i].rating;
                var imageUrl = results[i].images.fixed_height.url;
                var stillImageUrl = results[i].images.fixed_height_still.url;
                var p = $('<p>').text("Rating: " + rating);
                console.log("imageUrl: " + imageUrl);
                console.log("stillImageUrl: " + stillImageUrl);
                console.log("rating: " + rating);

                // Created a variable called show image
                var showImage = $("<img>");
                
                // Given the catImage the source path and an alt tag (screen readers). 
                showImage.attr('src', imageUrl);
                showImage.attr('alt', 'show image');
                showImage.attr('data-state', 'animate');
                showImage.attr('data-animate', imageUrl);
                showImage.attr('data-still',stillImageUrl);
                showImage.attr('class', 'tvImage');

                // Adding images before the content that's there 
                $('#gifsGoHere').prepend(showImage);
                $('#gifsGoHere').prepend(p);
            }
                
                // Setting the variable of image_url to the specific object 
                //var imageUrl = response.data.image_original_url;

        }
    });           
}


        
       
