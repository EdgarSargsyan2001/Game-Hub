let footballers = [
  "MESSI",
  "RONALDO",
  "NEYMAR",
  "INIESTA",
  "AGUERO",
  "XAVI",
  "SUAREZ",
  "PIQUE",
  "BENZEMA",
];
function randomWord() {
    const lengtOfArray = footballers.length;
    const indexOfRandomWord = Math.floor(Math.random() * lengtOfArray);
    return footballers[indexOfRandomWord];
  }
export {
    randomWord};