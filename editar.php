<?php
include("conexion.php");

$sql = "UPDATE docentes SET 
tipoDocumento='".$_POST['tipoDocumento']."',
nombre='".$_POST['nombre']."',
apellido='".$_POST['apellido']."',
fechaNacimiento='".$_POST['fechaNacimiento']."',
nivel='".$_POST['nivel']."',
area='".$_POST['area']."',
semestre='".$_POST['grado']."',
eps='".$_POST['eps']."',
salario='".$_POST['salario']."'
WHERE id=".$_POST['id'];

echo $conexion->query($sql) ? "ok" : "error";
?>