$(() => {
    let signin = $("#signin");
    let login = $(".login");
    signin.click(() => {
        login.toggle();
    })
})