<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получаем выбранное место
  $place = $_POST['place'];

  // Указываем, на какой email отправить сообщение
  $to = "bakutbeknursultan@gmail.com"; // Замените на ваш email
  $subject = "Выбор места свидания";
  $message = "Девушка выбрала место для свидания: " . $place;
  $headers = "From: no-reply@example.com"; // Замените на ваш домен

  // Отправка email
  if (mail($to, $subject, $message, $headers)) {
    echo "Выбор успешно отправлен!";
  } else {
    echo "Ошибка при отправке письма.";
  }
} else {
  echo "Некорректный метод отправки.";
}
?>
