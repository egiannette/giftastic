var topics = ["bobs burgers", "golden girls", "scooby doo"];

for(var i=0; i< topics.length;i++){
    var button = $('<input type="button" value="' + topics[i] + '" + data-show/>');
    $("#buttons").append(button);
    

}



$('#buttons').on('click', function() {

});
       
