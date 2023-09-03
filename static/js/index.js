$(document).ready(function () {

    document.documentElement.style.setProperty("--scale", $(window).width() / 250);

    $("select").change(function () {
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `lang=${$(this).val().substring(0, 2).toLowerCase()}`,
        })
        window.location.reload()
    });

    $("#book").click(function () {
        window.location.href = "/book"
    });
});