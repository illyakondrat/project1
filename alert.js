<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function checkAge(age) {
        return age > 18 ? true : confirm("Батьки дозволили?");
      }
    </script>

    <script>
      function checkAge(age) {
        return age > 18 || confirm("Батьки дозволили?");
      }
    </script>
  </body>
</html>


<!DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function min(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
    </script>
  </body>
</html>

//завдання 2.15



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
      }
      ask(
        "Ви згодні?",
        () => alert("Ви погодились."),
        () => alert("Ви скасували виконання.")
      );
    </script>
  </body>
  </html>

//завдання 2.17
