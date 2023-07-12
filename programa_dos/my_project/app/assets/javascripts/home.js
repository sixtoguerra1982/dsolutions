// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
window.addEventListener('load',
    function () {
        // Obtén una referencia al formulario
        let formulario = document.querySelector('form');


        // Agrega un evento de escucha al evento 'submit' del formulario
        formulario.addEventListener('submit', function (event) {
            // Detén el envío del formulario
            event.preventDefault();

            // Valida los campos del formulario
            if (validarNombre() && validarEdad() && validarCorreo() && validarTipo()) {
                // Si todos los campos son válidos, envía el formulario
                formulario.submit();
            }
        });

        // Función para validar el campo de nombre
        function validarNombre() {
            var nombreInput = document.getElementById('nombre');
            var nombre = nombreInput.value.trim();
            var soloLetras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;
            // Verifica si el campo está vacío
            if (nombre === '' || !soloLetras.test(nombre)) {
                alert('Por favor, ingresa solo letras');
                nombreInput.focus();
                return false;
            }

            return true;
        }

        // Función para validar el campo de edad
        function validarEdad() {
            var edadInput = document.getElementById('edad');
            var edad = parseInt(edadInput.value);

            // Verifica si el campo está vacío o no es un número válido
            if (isNaN(edad) || edad <= 0) {
                alert('Por favor, ingresa una edad válida.');
                edadInput.focus();
                return false;
            }

            return true;
        }

        // Función para validar el campo de correo electrónico
        function validarCorreo() {
            var correoInput = document.getElementById('correo');
            var correo = correoInput.value.trim();
            var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Verifica si el campo está vacío o no es un correo válido
            if (correo === '' || !correoRegex.test(correo)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                correoInput.focus();
                return false;
            }

            return true;
        }

        // Función para validar el campo de tipo
        function validarTipo() {
            var tipoInput = document.getElementById('tipo');
            var tipo = tipoInput.value.trim();

            // Verifica si el campo está vacío
            if (tipo === '') {
                alert('Por favor, ingresa un tipo.');
                tipoInput.focus();
                return false;
            }

            return true;
        }
    }

);