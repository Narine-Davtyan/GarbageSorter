window.addEventListener("load", () => {

    $("#company").click(function () {

        $("#my-form").attr("action", "company-registration.html");
    })

    $("#person").click(function () {

        $("#my-form").attr("action", "person-registration.html");
    })


})