<?php
include("conexion.php");

$sql = "INSERT INTO docentes (tipoDocumento, nombre, apellido, fechaNacimiento, nivel, area, semestre, eps, salario)
VALUES (
'".$_POST['tipoDocumento']."',
'".$_POST['nombre']."',
'".$_POST['apellido']."',
'".$_POST['fechaNacimiento']."',
'".$_POST['nivel']."',
'".$_POST['area']."',
'".$_POST['grado']."',
'".$_POST['eps']."',
'".$_POST['salario']."'
)";

echo $conexion->query($sql) ? "ok" : "error";
?>