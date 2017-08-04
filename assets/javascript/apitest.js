var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];
var t = "downsized_still";


$(document).ready(function() {


    function createButton(name) {
        var x = '<button id=' + name + 'class="ui-button ui-widget ui-corner-all">' + name + '</button>';
        return x;
    }
    for (i = 0; i < topics.length; i++) {
        $("#topics").append(createButton(topics[i]));

    }



    function populate(term) {
        var xhr = $.get(eval("http://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=c9498eda7a034e3aaf97cbe6471bc21b&limit=10"));
        xhr.done(function(data) {
            console.log("success got data", data);
        });



        $("[id^=image]").html(function() {
            var e = eval($(this).attr("value"));
            return "<img src='" + data.data[e].images.downsized_still.url + "'>";
        });
    }




    $(name).on("click", function() {

    });

    $("[id^=image]").on("click", function() {
        toggle(t);
        var e = eval($(this).attr("value"));
        $(this).html("<img src=" + eval("data.data[" + e + "].images." + t + ".url") + ">");
    });


    function toggle() {
        if (t === "downsized_still") {
            t = "downsized";
        } else {
            t = "downsized_still";
        }
    }






});
