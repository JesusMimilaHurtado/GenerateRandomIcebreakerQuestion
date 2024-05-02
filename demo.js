function generateIcebreaker() {
  const questions = [
    "Jaranesca",
    "Jesus",
    "Moncerrat",
    "Guadalupe",
    "Niran",
    "Maximo",
    "Sabrina",
    "Leslie",
    "Kadiatou",
    "Andrea",
    "Daniel",
    "Alfi",
    "Uriel",
    "Dante",
    "Victor",
    "Kaaliyah",
    "Rene",
    "Brett",
    "Abdikadir",
    "Kayla",
    "Ramsey",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = 'Hi ' + questions[index] + '!';
  // return questions[index];
}
