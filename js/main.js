let input = document.querySelector("input")
let block = document.getElementById("block");

const inject = async (command) => {
  let data = await fetch(`commands/${command}.html`);
  if (data.status == 404) {
    data = await fetch(`commands/404.html`);
  }        
  block.innerHTML += `
    <br> <span class="command">amjadcp:~$ ${command}</span>
    <br> <span class="command">${await data.text()}</span>
  `;
};

window.onload = async () =>{
  await inject("about");
  input.addEventListener("keyup", async function (e) {
    if ((e.keyCode || e.which) == 13) {
      // ENTER key pressed
      if (input.value == "clear"){
        block.innerHTML = ""
      }else if (input.value == "all"){
        await inject("about");
        await inject("experience");
        await inject("skill");
        await inject("connect");
      }else{
        await inject(input.value);
      }
      input.value = "";
    }
  });
};