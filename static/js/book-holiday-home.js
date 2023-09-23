$(document).ready(function () {

    fetch("/disable_dates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((dates) => {
        disableDates = []
        disableDates.push(...dates);
      
        flatpickr("#days", {
            disable: disableDates,
            mode: "range",
            minDate: "today",
            locale: $("#locale").val(),
            dateFormat: $("#dateFormat").val()
        });

    })
    .catch((error) => {
        console.error(error);
    });

    $("#languages").change(function () {
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
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

    $("#calender").click(function(){
        $("#days").click();
    });

});