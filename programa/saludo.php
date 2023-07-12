<?php
    function saludarUsuario($nombre) {
        echo "¡Hola, " . $nombre . "! Bienvenido/a.";
    }
    // asignar valores capturados por argumentos
    $arguments = $argv;
    // creo variable usuario con Valor NN (ningun nombre)
    $usuario = "NN";
    if (count($arguments) > 1) {
        // Si viene nombre por argumento lo asigno a variable de usuario
        $usuario = $arguments[1] ;
    } 
    saludarUsuario($usuario);
?>

