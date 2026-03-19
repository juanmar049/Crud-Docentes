<?php
include("conexion.php");

$id = $_POST['id'];

$sql = "DELETE FROM docentes WHERE id=$id";

echo $conexion->query($sql) ? "ok" : "error";
?>