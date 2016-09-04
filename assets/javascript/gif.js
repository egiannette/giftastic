$('#buttons').on('click', function() {
       
        // After the click function it accesses api and searches for cats
        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=beaarthur";

        // Going to the URL and getting the data; 
        $.ajax({url: queryURL, method: 'GET'})

            // When its finished getting the query. 
            .done(function(response) {

                // Setting the variable of image_url to the specific object 
                var imageUrl = response.data.image_original_url;

                // Created a variable called cat image
                var catImage = $("<img>");
