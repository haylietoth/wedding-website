jQuery (document).ready(function(){    
    /*page fade-in and fade-out */
    $('body').css('display','none');
    $('body').fadeIn(500);

    $(document).on("click", "a", function () {
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });
});