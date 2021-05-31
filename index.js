$(document).ready(function () {

    $(document).on("click","#introhref",function(){
        $('#introdiv').removeClass();
        $('#likediv').addClass('none');
        $('#dreamdiv').addClass('none');
    });

    $(document).on("click","#likehref",function(){
        $('#introdiv').addClass('none');
        $('#likediv').removeClass();
        $('#dreamdiv').addClass('none');
    });

    $(document).on("click","#dreamhref",function(){
        $('#introdiv').addClass('none');
        $('#likediv').addClass('none');
        $('#dreamdiv').removeClass();
    });
});