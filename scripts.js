window.onload = function() {

    darkmode = document.getElementById("check1");
    page = document.getElementsByClassName("pagina")[0];

    function colors(color, colorPage) {
        document.body.style.background = color;
        page.style.background = colorPage;
    }
    darkmode.addEventListener("click", e => {
        if (darkmode.checked) {
            colors("#0c0d0e", "#3d3d3d")
            page.style.color = "white";
        } else {
            colors("aliceblue", "#dddee7")
            page.style.color = "black";
        }
    })
}