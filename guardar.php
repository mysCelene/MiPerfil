<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contacto_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario (desde JS)
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO mensajes (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
  echo "✅ Mensaje guardado con éxito";
} else {
  echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
