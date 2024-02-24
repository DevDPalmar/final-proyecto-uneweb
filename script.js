function randomizeColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('body').style.backgroundColor = randomColor;
}

function addColor() {
    var color = document.getElementById('body').style.backgroundColor;
    var select = document.getElementById('colorSelect');
    if (colorExists(color)) {
        alert('El color ya está en la lista.');
    } else {
        var option = document.createElement('option');
        option.text = color;
        option.value = color;
        option.style.backgroundColor = color;
        select.add(option);
        alert('Color añadido a la lista.');
    }
}

function addHTMLColor() {
    var color = document.getElementById('colorInput').value;
    var select = document.getElementById('colorSelect');
    if (color === '') {
        alert('Por favor, introduce un código de color.');
    } else if (colorExists(color)) {
        alert('El color ya está en la lista.');
    } else {
        var option = document.createElement('option');
        option.text = color;
        option.value = color;
        option.style.backgroundColor = color;
        select.add(option);
        alert('Color añadido a la lista.');
    }
}

function removeColor() {
    var select = document.getElementById('colorSelect');
    var color = select.value;
    if (color !== 'Seleccionar') {
        select.remove(select.selectedIndex);
        alert('Color eliminado de la lista.');
    } else {
        alert('Por favor, selecciona un color para eliminar.');
    }
}

function changeColor(value) {
    if (value === 'Seleccionar') {
        document.getElementById('body').style.backgroundColor = 'white';
    } else {
        document.getElementById('body').style.backgroundColor = value;
    }
}

function copyColor() {
    var color = document.getElementById('body').style.backgroundColor;
    navigator.clipboard.writeText(color).then(function() {
        alert('Color copiado al portapapeles: ' + color);
    }, function(err) {
        alert('Error al copiar el color al portapapeles: ' + err);
    });
}

function colorExists(color) {
    var select = document.getElementById('colorSelect');
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === color) {
            return true;
        }
    }
    return false;
}
