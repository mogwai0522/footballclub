$(function(){
    $(".bottom-navi").hover(
        function(){
            $(this).find(".ex-navi").slideDown();
        },
        function(){
            $(this).find(".ex-navi").slideUp();
        }
    );

    $('.nav-toggle').on('click', function () {
        $('.nav-toggle, #hamburger-content').toggleClass('show');
    });
});
