$(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({ 
              "top" : eventObject.pageY,
              "left" : eventObject.pageX,
            })
            .show();
    }).mouseout(function () {
        $("#tooltip").hide().html("").css({
            "top" : 0,
            "left" : 0,
        });
    });
});

    