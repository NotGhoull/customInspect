// =================================
// ==         VARIABLES            =
// =================================

var debugMode = false;
var eventItem = null;
var textButtonClickListener = null;
var htmlButtonClickListener = null;
var destroyButtonClickListener = null;
var documentClickHandler = null;

// =================================
// ==             UI               =
// =================================

var ui = document.createElement("div");
ui.style.position = "fixed";
ui.style.top = "20px";
ui.style.right = "20px";
ui.style.background = "#fff";
ui.style.border = "1px solid #000";
ui.style.padding = "10px";
ui.style.zIndex = "9999";
ui.id = "ignore-custom-inspect";
ui.style.pointerEvents = "none";

var textInput = document.createElement("input");
textInput.type = "text";
textInput.style.marginBottom = "10px";
var textButton = document.createElement("button");
textButton.innerText = "Save Text";
textButton.id = "ignore-custom-inspect";
textButton.style.marginRight = "10px";

var htmlTextarea = document.createElement("textarea");
htmlTextarea.id = "ignore-custom-inspect";
htmlTextarea.style.width = "100%";
htmlTextarea.style.height = "200px";
htmlTextarea.style.resize = "none";
var htmlButton = document.createElement("button");
htmlButton.innerText = "Save HTML";

var destroyButton = document.createElement("button");
destroyButton.innerText = "Destroy";

destroyButton.addEventListener("click", function () {
    ui.remove();
    removeEventListeners();
    alert("Destroyed UI and Script. Refresh the page to remove all effects.");
});

ui.appendChild(textInput);
ui.appendChild(textButton);
ui.appendChild(destroyButton);
ui.appendChild(htmlTextarea);
ui.appendChild(htmlButton);

// =================================
// ==        EVENT LISTENERS       =
// =================================

document.addEventListener("click", function (event) {
    if (
        !event.target.closest("#ignore-custom-inspect") &&
        !ui.contains(event.target)
    ) {
        if (debugMode) {
            alert(
                "Clicked element: " +
                    event.target.tagName +
                    "\n\n" +
                    event.target.outerHTML
            );
        } else {
            textInput.value = event.target.innerText;
            htmlTextarea.value = event.target.outerHTML;
            document.body.appendChild(ui);
            ui.style.pointerEvents = "auto";
            eventItem = event;

            // Add event listeners to buttons when the UI is displayed
            textButtonClickListener = function () {
                eventItem.target.innerText = textInput.value;
                document.body.removeChild(ui);
            };
            textButton.addEventListener("click", textButtonClickListener);

            htmlButtonClickListener = function () {
                eventItem.target.outerHTML = htmlTextarea.value;
                document.body.removeChild(ui);
            };
            htmlButton.addEventListener("click", htmlButtonClickListener);
        }
    }
});

documentClickHandler = function (event) {
    if (event.target === ui || ui.contains(event.target)) {
        event.stopPropagation();
    }
};
document.addEventListener("click", documentClickHandler);

// =================================
// ==      HELPER FUNCTIONS        =
// =================================

function removeEventListeners() {
    // Remove event listeners from buttons
    textButton.removeEventListener("click", textButtonClickListener);
    htmlButton.removeEventListener("click", htmlButtonClickListener);
    destroyButton.removeEventListener("click", destroyButtonClickListener);
    document.removeEventListener("click", documentClickHandler);

    // Check if event listeners are still present
    if (
        textButtonClickListener ||
        htmlButtonClickListener ||
        destroyButtonClickListener ||
        documentClickHandler
    ) {
        var shouldAutoRefresh = confirm(
            "Event listeners might still be active. Do you want to auto-refresh the page? (THIS WILL REVERT ALL CHANGES MADE)"
        );

        if (shouldAutoRefresh) {
            window.location.reload();
        }
    }
}

// =================================
// ==        WINDOW RESIZE         =
// =================================

window.addEventListener("resize", function () {
    ui.style.top = "20px";
    ui.style.right = "20px";
});

// =================================
// ==   SCRIPT INJECTION MESSAGE   =
// =================================

var script = document.currentScript;
var parentTagName = "Unknown";
try {
    parentTagName = script.parentNode ? script.parentNode.tagName : "Unknown";
} catch (e) {
    parentTagName = "Unknown (error -> sent to console)";
    console.error("❎ Error during initialization " + e);
}
alert(
    "Custom Inspect v1.1 injected successfully. Injected to: " + parentTagName
);

