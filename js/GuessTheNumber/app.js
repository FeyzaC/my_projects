// 1-100 arasinda bir sayi tuttur

const randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".input").value);
  //   console.log(guessNumber);

  if (randomNumber > guessNumber) {
    alert("Up 👍");
    document.querySelector(".input").value = "";
  } else if (randomNumber < guessNumber) {
    alert("Down 👎");
    document.querySelector(".input").value = "";
  } else {
    alert("Perfect 😍");
    document.querySelector(".input").value = "";
  }
});
