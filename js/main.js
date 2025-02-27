let input = document.querySelector("input");
let block = document.getElementById("block");

const inject = async (command) => {
  let data = await fetch(`commands/${command}.html`);
  if (data.status == 404) {
    data = await fetch(`commands/404.html`);
  }
  block.innerHTML += `
    <br> <br> <span class="command">amjadcp@web:~$ ${command}</span>
    <br> <br> ${await data.text()} <br> <br>
  `;
};

window.onload = async (e) => {
  e.preventDefault();
  await inject("about");
  await inject("experience");
  await inject("skill");
  await inject("connect");
  input.addEventListener("keyup", async function (e) {
    if ((e.keyCode || e.which) == 13) {
      // ENTER key pressed
      if (input.value.toLowerCase() == "clear") {
        block.innerHTML = "";
      } else if (input.value.toLowerCase() == "all") {
        await inject("about");
        await inject("experience");
        await inject("skill");
        await inject("connect");
      } else {
        await inject(input.value.toLowerCase());
      }
      input.value = "";
    }
  });
};
