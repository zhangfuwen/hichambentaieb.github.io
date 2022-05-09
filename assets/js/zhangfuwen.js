
function DoModal(but, contentNode) {
    but.click(function(){
        $(".Modal").html("")
        $(".Modal").removeAttr("id");
        $(".Modal").fadeToggle();
        $(".Modal").append("<button class='Close'>Close</button>");
        $(".Close").click(function(){
            $(".Modal").fadeOut();
        });

        var editorNode = $("<div id='editor'><div>").appendTo($(".Modal"));
        editorNode.html(contentNode);
        
        
        var myeditor = ace.edit("editor");
        myeditor.session.setMode("ace/mode/javascript");
        myeditor.setKeyboardHandler("ace/keyboard/vim");
        myeditor.setTheme("ace/theme/solarized_light");
    });

}

function GenToc()
{
    var toc = $("<div id='toc'></div>").appendTo($("body"));

    $(".markdown-body").children("h1,h2,h3,h4,h5,h6").clone().each(function () {
        var x = $(this);
        var link = x.find("a").attr("href");

        var text = x.text();
        var clazz = x.prop("tagName");
        $("#toc").append("<p class='" + clazz + "'><a href='" + link + "'>" + text + "</a></p>");
    });
}

$(function () {
    $(".content").append("<div id='editor' class='Modal'></div>");

    $("pre").each(function () {
        var x = $(this);
        let h = $(this).css("height");
        if (h != "200px") {

            x.css("max-height", 200);
            x.css("height", 200);

            let butExpand = $("<button>Expand</button>").appendTo($(this).parent());
            let butCollapse = $("<button>Collapse</button>").prependTo(x.parent());
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


    $("pre").each(function() {
        var x = $(this);
        var code = x.children("code").eq(0).clone();
        let butModel = $("<button> Maximize</button>").prependTo(x.parent());
        DoModal(butModel, code);
    });
    var toc = $("<div id='toc'></div>").appendTo($("body"));
    $(".markdown-body").children("h1,h2,h3,h4,h5").appendTo($("#toc"));

});