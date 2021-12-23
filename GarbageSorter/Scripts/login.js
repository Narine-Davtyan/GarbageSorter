window.addEventListener("load", function () {
    let txt_user = $("#user");
    let txt_pass = $("#pass");
    let submit_btn = $("#submit_btn");

    submit_btn.click(function () {
        if (txt_user.val() && txt_pass.val()) {
            window.location.href = "company-profile.html";
        } else {
            alert("User and password are empty");
        }
    });
})


