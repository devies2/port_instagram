
$(function () {

    $("#join_pw").on('input', function () {
        if ($("join_pw").val() == '')
            $("#join_complete").attr("disabled", true);
        else
            $("#join_complete").attr("disabled", false);
    });
})