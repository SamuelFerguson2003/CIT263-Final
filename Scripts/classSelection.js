//This JavaScript is designed to show class information based on the year selected in the dropdown
//Javascript developed by Samuel Ferguson, debugged by ChatGPT 4o
document.addEventListener("DOMContentLoaded", function () {

    const dropdown = document.getElementById("yearList");
    const div1 = document.getElementById("year2025");
    const div2 = document.getElementById("year2024");

    div1.style.display = "none";
    div2.style.display = "none";

    dropdown.addEventListener("change", function () {
        const value = dropdown.value;

        if (value === "2025") {
            div1.style.display = "block";
            div2.style.display = "none";
        } else if (value === "2024") {
            div1.style.display = "none";
            div2.style.display = "block";
        } else {
            div1.style.display = "none";
            div2.style.display = "none";
        }
    });
});