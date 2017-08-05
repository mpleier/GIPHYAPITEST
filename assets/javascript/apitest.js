var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];
var t = "fixed_height_still";
var data = "error";
var name = "cat";

$(document).ready(function() {

for (i = 0; i<10; i++){
  $("#wrap").append('<div id="image"' + i + '" value="' + i + '" class="display"></div>');
}



    function createButton(name) {
        var x = '<button id=' + name + ' value=' + name + ' class="ui-button ui-widget ui-corner-all">' + name + '</button>';
        return x;
    }
    for (i = 0; i < topics.length; i++) {
        $("#topics").append(createButton(topics[i]));

    }

    function addButton(name) {
        var x = '<button id=' + name + ' value=' + name + ' class="ui-button ui-widget ui-corner-all">' + name + '</button>';
        return x;

    }



    function populate(term) {
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=c9498eda7a034e3aaf97cbe6471bc21b&limit=10");
        xhr.done(function(t) {
          data = t;
            console.log("success got data", t);
            $("[id^=image]").html(function() {
                var e = $(this).attr("value");
                return "<img src='" + data.data[e].images.fixed_height_still.url + "'><br>Rating: ''" + data.data[e].rating;
            });
        });


    }






    $(".display").on("click", function() {
        toggle(t);
        var e = eval($(this).attr("value"));
        $(this).html("<img src=" + eval("data.data[" + e + "].images." + t + ".url") + "><br>Rating: " + data.data[e].rating);
    });


    function toggle() {
        if (t === "fixed_height_still") {
            t = "fixed_height";
        } else {
            t = "fixed_height_still";
        }
    }


    $("#addimal").submit(function( event ) {

      event.preventDefault();
      $("#topics").append(addButton($( "input:first" ).val()));

    });


    $("#topics").on("click", ".ui-button", function() {
populate($(this).attr("value"));
    });

});
