window.onload = function() {

    darkmode = document.getElementById("check1");
    page = document.getElementsByClassName("pagina")[0];
    nightText = document.getElementById("night");
    nightTitle = document.getElementById("nightTitle");

    function colors(color, colorPage) {
        document.body.style.background = color;
        if(page != null)
            page.style.background = colorPage;
    }
    darkmode.addEventListener("click", e => {
        if (darkmode.checked) {
            colors("#0c0d0e", "#3d3d3d")
            if(page != null)
                page.style.color = "white";
            if(nightText != null)
                nightText.style.color = "white";
            if(nightTitle != null)
                nightTitle.style.color = "white";
        } else {
            colors("aliceblue", "#dddee7")
            if(page != null)
                page.style.color = "black";
            if(nightText != null)
                nightText.style.color = "#041664";
            if(nightTitle != null)
                nightTitle.style.color = "#041664";
        }
    })
}