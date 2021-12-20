window.addEventListener("load", () => {
    $("#accept").click(function () {
        window.location.href = "company-registeration.html";
    })
    let radioValue = $("input[name='drone']:checked").val();
    console.log(radioValue);

    $("#huey").click(function () {
        let radioValue = $("input[name='drone']:checked").val();

        $("#my-form").attr("action", "company-registeration.html");
        console.log($("#my-form").attr("action"));
        console.log(radioValue);
    })

    $("#dewey").click(function () {
        let radioValue = $("input[name='drone']:checked").val();

        $("#my-form").attr("action", "person-registeration.html");
        console.log($("#my-form").attr("action"));

        console.log(radioValue);
    })


})