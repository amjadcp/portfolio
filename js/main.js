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

const typeText = async (element, text, delay = 5) => {
  element.classList.add('typing');
  // Create a temporary div to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  const content = tempDiv.textContent;
  
  for (let i = 0; i < content.length; i++) {
    element.textContent += content[i];
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  element.classList.remove('typing');
};

const inject = async (command) => {
  let data = await fetch(`commands/${command}.html`);
  if (data.status == 404) {
    data = await fetch(`commands/404.html`);
  }
  const response = await data.text();
  
  // Create new command block
  const commandBlock = document.createElement('div');
  commandBlock.className = 'command-block';
  
  // Add command prompt
  const commandPrompt = document.createElement('span');
  commandPrompt.className = 'command';
  commandPrompt.textContent = `amjadcp@web:~$ ${command}`;
  commandBlock.appendChild(commandPrompt);
  
  // Add response with typing effect
  const responseElement = document.createElement('div');
  responseElement.textContent = '';
  commandBlock.appendChild(responseElement);
  
  // Add to page
  block.appendChild(commandBlock);
  
  // Type out the response
  await typeText(responseElement, response);
  
  // After typing is complete, replace with actual HTML
  responseElement.innerHTML = response;
  
  scrollToCommand(command);
};

window.onload = async (e) => {
  e.preventDefault();
  await inject("about");
  await inject("experience");
  await inject("skill");
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
