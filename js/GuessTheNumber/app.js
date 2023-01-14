// 1-100 arasinda bir sayi tuttur

const randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".input").value);
  //   console.log(guessNumber);

  if (randomNumber > guessNumber) {
    alert("Up 👍");

  } else if (randomNumber < guessNumber) {
    alert("Down 👎");

  } else {
    alert("Perfect 😍");
  }
  document.querySelector(".input").value = "";
  document.querySelector(".input").focus() = "";
});
