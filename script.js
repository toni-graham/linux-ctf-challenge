// Script to simulate Linux terminal commands

// Initial instructions
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');

// Available commands
const commands = {
    help: "Available commands:\n- help: Show available commands\n- ls: List files\n- cat /etc/flag.txt: Show the flag (with proper permissions)\n- sudo: Use sudo privileges",
    ls: "flag.txt\nhidden_folder\nuser_data.txt",
    "cat /etc/flag.txt": "The flag is: UMBC{This_is_the_hidden_flag!}",
    sudo: "Permission granted. You can now access the flag. Try: 'cat /etc/flag.txt'",
    default: "Command not found. Type 'help' for available commands."
};

// Display output in the terminal
function displayOutput(text) {
    terminalOutput.innerHTML += `<p>$ ${text}</p>`;
    window.scrollTo(0, document.body.scrollHeight);  // Auto-scroll to the latest message
}

// Process user input
function processCommand() {
    const command = commandInput.value.trim();

    if (command in commands) {
        displayOutput(commands[command]);
    } else {
        displayOutput(commands.default);
    }

    commandInput.value = '';  // Clear the input field after command is processed
}

// Add event listener for command input
commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processCommand();
    }
});

// Display the initial instructions
displayOutput("Welcome to the Linux system. Type 'help' for available commands.");
