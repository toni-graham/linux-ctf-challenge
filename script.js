document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var userCommand = document.getElementById("userInput").value;
    processCommand(userCommand);
    document.getElementById("userInput").value = ''; // Clear input field
  }
});

function processCommand(command) {
  var output = document.getElementById("output");

  if (command.toLowerCase() === "ls") {
    output.innerHTML = "<br>Desktop  Documents  Downloads  .message.txt";
  } else if (command.toLowerCase() === "cat .message.txt") {
    output.innerHTML = "<br>The code lies in the puzzle of access control. Look closely at the permissions.";
  } else {
    output.innerHTML = "<br>command not found: " + command;
  }
}
