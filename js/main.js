let input = document.querySelector("input");
let block = document.getElementById("block");

const scrollToCommand = (command) => {
  setTimeout(() => {
    const commandBlocks = document.querySelectorAll('.command-block');
    if (commandBlocks.length > 0) {
      // For 'all' command, scroll to the first block (about)
      if (command === 'all') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // For specific commands, find the matching block
        const lastBlock = commandBlocks[commandBlocks.length - 1];
        lastBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 100);
};

const inject = async (command) => {
  let data = await fetch(`commands/${command}.html`);
  if (data.status == 404) {
    data = await fetch(`commands/404.html`);
  }
  const response = await data.text();
  block.innerHTML += `
    <div class="command-block">
      <span class="command">amjadcp@web:~$ ${command}</span>
      ${response}
    </div>
  `;
};

window.onload = async (e) => {
  e.preventDefault();
  await inject("about");
  await inject("experience");
  await inject("skill");
  await inject("certificate");
  await inject("project");
  await inject("connect");
  // Don't auto-scroll on initial load
  
  input.addEventListener("keyup", async function (e) {
    if ((e.keyCode || e.which) == 13) {
      // ENTER key pressed
      if (input.value.toLowerCase() == "clear") {
        block.innerHTML = "";
      } else if (input.value.toLowerCase() == "all") {
        block.innerHTML = ""; // Clear existing content
        await inject("about");
        await inject("experience");
        await inject("skill");
        await inject("certificate");
        await inject("project");
        await inject("connect");
        scrollToCommand("all");
      } else {
        await inject(input.value.toLowerCase());
        scrollToCommand(input.value.toLowerCase());
      }
      input.value = "";
    }
  });
};
