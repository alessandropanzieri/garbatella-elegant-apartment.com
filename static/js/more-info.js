$(document).ready(function () {

    $("#languages").change(function () {
        fetch("/more-info", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `lang=${$(this).val()}`,
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

    $("#name").click(function () {
        window.location.href = "/"
    });

});