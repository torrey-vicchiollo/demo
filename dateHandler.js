function fillDateSelects() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let qntYears = 4;
    let selectYear = $("#yearForTeeSheet");
    let selectMonth = $("#monthForTeeSheet");
    let selectDay = $("#dayForTeeSheet");

    let selectYear2 = $("#yearForTeeTime");
    let selectMonth2 = $("#monthForTeeTime");
    let selectDay2 = $("#dayForTeeTime");

    let selectYear3 = $("#yearForTeeSheetGeneration");
    let selectMonth3 = $("#monthForTeeSheetGeneration");
    let selectDay3 = $("#dayForTeeSheetGeneration");

    let currentYear = new Date().getFullYear();

    // year fill
    //teesheet
    for (var y = 0; y < qntYears; y++) {
        let yearElem = document.createElement("option");
        yearElem.value = currentYear + y; // Set the value to the incremented year
        yearElem.textContent = currentYear + y; // Set the display text to the incremented year
        selectYear.append(yearElem);
    }
    //teetime
    for (var y = 0; y < qntYears; y++) {
        let yearElem = document.createElement("option");
        yearElem.value = currentYear + y; // Set the value to the incremented year
        yearElem.textContent = currentYear + y; // Set the display text to the incremented year
        selectYear2.append(yearElem);
    }
    //generation
    for (var y = 0; y < qntYears; y++) {
        let yearElem = document.createElement("option");
        yearElem.value = currentYear + y; // Set the value to the incremented year
        yearElem.textContent = currentYear + y; // Set the display text to the incremented year
        selectYear3.append(yearElem);
    }

    //month fill
    //teesheet
    for (var m = 0; m < 12; m++) {
        let month = monthNames[m];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth.append(monthElem);
    }
    //teetime
    for (var m = 0; m < 12; m++) {
        let month = monthNames[m];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth2.append(monthElem);
    }
    //generation
    for (var m = 0; m < 12; m++) {
        let month = monthNames[m];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth3.append(monthElem);
    }

    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();

    selectYear.val(year);
    selectYear2.val(year);
    selectYear3.val(year);

    selectYear.on("change", AdjustDays);
    selectYear2.on("change", AdjustDays);
    selectYear3.on("change", AdjustDays);

    selectMonth.val(month);
    selectMonth2.val(month);
    selectMonth3.val(month);

    selectMonth.on("change", AdjustDays);
    selectMonth2.on("change", AdjustDays);
    selectMonth3.on("change", AdjustDays);

    AdjustDays();
    selectDay.val(day);
    selectDay2.val(day);
    selectDay3.val(day);

    function AdjustDays() {
        var year = selectYear.val();
        var month = parseInt(selectMonth.val()) + 1;

        selectDay.empty();
        //get the last day, so the number of days in that month
        var days = new Date(year, month, 0).getDate();
        //lets create the days of that month
        for (var d = 1; d <= days; d++) {
            var dayElem = document.createElement("option");
            dayElem.value = d;
            dayElem.textContent = d;
            selectDay.append(dayElem);
        }

        //tee time
        selectDay2.empty();
        var days = new Date(year, month, 0).getDate();
        for (var d = 1; d <= days; d++) {
            var dayElem = document.createElement("option");
            dayElem.value = d;
            dayElem.textContent = d;
            selectDay2.append(dayElem);
        }

        //generation
        selectDay3.empty();
        var days = new Date(year, month, 0).getDate();
        for (var d = 1; d <= days; d++) {
            var dayElem = document.createElement("option");
            dayElem.value = d;
            dayElem.textContent = d;
            selectDay3.append(dayElem);
        }
    }
}

function dateDisplay(){
    const d = new Date();
    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    day = weekday[d.getDay()];
    date = d.getDate();
    month = 1 + d.getMonth();
    year = d.getFullYear();
    formattedDate = day + ",    " + month + "/" + date + "/" + year;
    document.getElementById("dateDisplay").innerHTML = formattedDate;
}