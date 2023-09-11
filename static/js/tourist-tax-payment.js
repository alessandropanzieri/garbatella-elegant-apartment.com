$(document).ready(function () {

    $("#name").click(function () {
        window.location.href = "/"
    });

    $("#languages").change(function () {
        fetch("/tourist-tax-payment", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `lang=${$(this).val().substring(0, 2).toLowerCase()}`,
        })
        .then(response => {
            if (response.status === 200) {
                window.location.reload();
            }
        })
        .catch(error => {
            console.error(error);
        });
    });

    $(".copy").click(function () {

    });

    $("#paypal").click(function () {
        window.location.href = ""
    });

});