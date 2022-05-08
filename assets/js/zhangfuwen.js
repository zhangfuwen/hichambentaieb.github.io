
function DoModal(but, contentNode) {
    but.click(function(){
        $(".Modal").html(contextNode);
        $(".Modal").fadeToggle();
    });

}

$(function () {
    $(".content").append("<div id='editor' class='Modal'></div>");
    var myeditor = ace.edit("editor");
    myeditor.session.setMode("ace/mode/javascript");
    myeditor.setKeyboardHandler("ace/keyboard/vim");
    myeditor.setTheme("ace/theme/solarized_light");
    $("pre").each(function () {
        var x = $(this);
        let h = $(this).css("height");
        if (h != "200px") {

            x.css("max-height", 200);
            x.css("height", 200);

            let butExpand = $("<button>click to expand</button>").appendTo($(this).parent());
            let butCollapse = $("<button>click to collapse</button>").prependTo(x.parent());
            butExpand.show();
            butCollapse.hide();

            butExpand.click(function () {
                x.css("max-height", "none");
                x.css("height", "auto");
                console.log("height", x.css("height"));
                console.log("max", x.css("max-height"));
                butExpand.hide();
                butCollapse.show();
            });

            butCollapse.click(function () {
                x.css("max-height", "200px");
                x.css("height", "200px");
                console.log("height", x.css("height"));
                console.log("max", x.css("max-height"));
                butCollapse.hide();
                butExpand.show();
            });
        }
    });

    $(".Modal").hide();
    $(".Close").click(function(){
      $(".Modal").fadeOut();
    });

    $("pre").each(function() {
        var x = $(this);
        var code = x.child("code");
        let butModel = $("<button> Maximize</button>").appendTo(x.parent());
        DoModal(butModel, code.text());
    });

});