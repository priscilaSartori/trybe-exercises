window.onload = function() {
    let coresBack = document.getElementById("coresBack");
    coresBack.addEventListener('change', function() {
        let select = coresBack.selectedOptions[0];
        let texto = document.querySelector("#texto");
        texto.style.background = select.value;

        localStorage.setItem('background', select.value);
    })

    let coresText = document.getElementById("coresText");
    coresText.addEventListener("change", function(){
        let select2 = coresText.selectedOptions[0];
        let texto = document.querySelector("#texto");
        texto.style.color = select2.value;

        localStorage.setItem('color', select2.value);
    })     

    let changeFont = document.getElementById("font-size");
    changeFont.addEventListener("change", function() {
        let texto = document.querySelector("#texto");
        texto.style.fontSize = `${changeFont.value}px`;

        localStorage.setItem('fontSize', `${changeFont.value}px`);
    })

    let changeLineSpacing = document.getElementById("line-spacing");
    changeLineSpacing.addEventListener('change', function() {
        let texto = document.querySelector("#texto");
        texto.style.lineHeight = `${changeLineSpacing.value}px`;
        
        localStorage.setItem('lineHeight', `${changeLineSpacing.value}px`);        
    })

    let changeTypeFont = document.getElementById('FontFamily');
    changeTypeFont.addEventListener('change', function() {
        let select3 = changeTypeFont.selectedOptions[0];
        let texto = document.querySelector("#texto");
        texto.style.fontFamily = select3.value;

        localStorage.setItem('fontFamily', select3.value);
    })

    let savedCoresBack = localStorage.getItem('background');
    let texto = document.querySelector("#texto");
    texto.style.background = savedCoresBack;

    let saveFontSize = localStorage.getItem('fontSize');
    texto.style.fontSize = saveFontSize;

    let saveCoresText = localStorage.getItem('color');
    texto.style.color = saveCoresText;

    let savedLineSpacing = localStorage.getItem('lineHeight');
    texto.style.lineHeight = savedLineSpacing;

    let savedFontFamily = localStorage.getItem('fontFamily');
    texto.style.fontFamily = savedFontFamily;

}

