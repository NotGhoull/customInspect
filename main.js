document.addEventListener("click", function(event) {
  if (debugMode) {
    alert("Clicked element: " + event.target.tagName + "\n\n" + event.target.outerHTML);
  } else {
    var choice = prompt("Enter 'text' to edit the text or 'html' to edit the HTML:", "text");
    if (choice === "text") {
      var newText = prompt("Enter new text:", event.target.innerText);
      if (newText !== null) {
        event.target.innerText = newText;
      }
    } else if (choice === "html") {
      var newHTML = prompt("Enter new HTML:", event.target.outerHTML);
      if (newHTML !== null) {
        event.target.outerHTML = newHTML;
      }
    } else {
      alert("Invalid choice: " + choice);
    }
  }
});

var debugMode = false;
alert("Custom Inspect v1 injected successfully, press CTRL+R or refresh the page to disable");
