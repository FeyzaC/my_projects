// 1-100 arasinda bir sayi tuttur

const randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".input").value);
  //   console.log(guessNumber);
    const bodyBgColor = document.querySelector("body");
    const newH4 = document.querySelector("h4");
    const newImg = document.querySelector("img")
 

  if (randomNumber > guessNumber) {
    alert("Up 👍");

  } else if (randomNumber < guessNumber) {
    alert("Down 👎");

  } else {
    alert("Perfect 😍");
    bodyBgColor.style.backgroundColor = "green"
    newH4.textContent = "You are right 😎"
    newImg.style.borderRadius = "30px"
    // document.querySelector("img").src = "images.jpg"
    document.querySelector("body").style.backgroundImage =  "url('images.jpg')"
  }
  document.querySelector(".input").value = "";
  document.querySelector(".input").focus() = "";
});
