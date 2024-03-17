document.addEventListener('DOMContentLoaded', function () {

    //Ejercicio 2

    function pintar(elementoClickeado,color="green"){
        elementoClickeado.style.backgroundColor = color;
    }

    function agregarEventoClick(id,color) {

        const ele1 = document.getElementById(id);
        
        if (ele1) {
            ele1.addEventListener("click", function(event) {
                console.log(event.target)
                pintar(event.target,color);
            });
        }
    }

    agregarEventoClick("ele1","yellow")
    


    document.querySelectorAll('.color').forEach((cuadro) => {
        cuadro.addEventListener('click', function (event) {
            const element = event.target;
            console.log(element.style.backgroundColor);
            element.style.backgroundColor = '#000000';
        });
    });

    //Ejercicio 3

    let colorTecla;
    

    document.addEventListener('keydown', function (event) {
        console.log(event)
        const tecla = event.key;
            declaraColor1(tecla);
            declaraColor2(tecla)
    });

    const declaraColor1 = (letra) => {
        const teclaVerificada = letra.toLowerCase();
        switch (teclaVerificada) {
            case 'a':
                colorTecla = 'pink';
                changeBg(colorTecla);
                break;
            case 's':
                colorTecla = 'orange';
                changeBg(colorTecla);
                break;
            case 'd':
                colorTecla = '#2ee2e1';
                changeBg(colorTecla);
                break;
        }
    };


    const declaraColor2 = (letra) => {
        const teclaVerificada = letra.toLowerCase();
        switch (teclaVerificada) {
            case 'q':
                colorTecla = 'purple';
                changeBg2(colorTecla);
                break;
            case 'w':
                colorTecla = 'grey';
                changeBg2(colorTecla);
                break;
            case 'e':
                colorTecla = '#874326';
                changeBg2(colorTecla);
                break;
        }
    };

    const changeBg = (color) => {
        const element = document.getElementById('key');
        element.style.backgroundColor = color;
    };

    const changeBg2 = (color) => {
        const element = document.getElementById('cuadro');
        element.style.backgroundColor = color;
    };
    

});

