# Version 1.1.0

- Added new UI
- Added functionality to destroy UI
- Added more comments to the code
- Added main.min.js

Load the code using this function:

```javascript
javascript: fetch("https://raw.githubusercontent.com/NotGhoull/customInspect/main/main.min.js").then((response) => response.text())then((data) => { const script = document.createElement("script");script.innerHTML = data; document.body.appendChild(script); }).catch((error) => { alert("Error loading from URL: " + error); });
```

or you can use the old method

```javascript
javascript: var debugMode=!1,eventItem=null,textButtonClickListener=null,htmlButtonClickListener=null,destroyButtonClickListener=null,documentClickHandler=null,ui=document.createElement("div");ui.style.position="fixed",ui.style.top="20px",ui.style.right="20px",ui.style.background="#fff",ui.style.border="1px solid #000",ui.style.padding="10px",ui.style.zIndex="9999",ui.id="ignore-custom-inspect",ui.style.pointerEvents="none";var textInput=document.createElement("input");textInput.type="text",textInput.style.marginBottom="10px";var textButton=document.createElement("button");textButton.innerText="Save Text",textButton.id="ignore-custom-inspect",textButton.style.marginRight="10px";var htmlTextarea=document.createElement("textarea");htmlTextarea.id="ignore-custom-inspect",htmlTextarea.style.width="100%",htmlTextarea.style.height="200px",htmlTextarea.style.resize="none";var htmlButton=document.createElement("button");htmlButton.innerText="Save HTML";var destroyButton=document.createElement("button");function removeEventListeners(){textButton.removeEventListener("click",textButtonClickListener),htmlButton.removeEventListener("click",htmlButtonClickListener),destroyButton.removeEventListener("click",destroyButtonClickListener),document.removeEventListener("click",documentClickHandler),(textButtonClickListener||htmlButtonClickListener||destroyButtonClickListener||documentClickHandler)&&confirm("Event listeners might still be active. Do you want to auto-refresh the page? (THIS WILL REVERT ALL CHANGES MADE)")&&window.location.reload()}destroyButton.innerText="Destroy",destroyButton.addEventListener("click",function(){ui.remove(),removeEventListeners(),alert("Destroyed UI and Script. Refresh the page to remove all effects.")}),ui.appendChild(textInput),ui.appendChild(textButton),ui.appendChild(destroyButton),ui.appendChild(htmlTextarea),ui.appendChild(htmlButton),document.addEventListener("click",function(t){t.target.closest("#ignore-custom-inspect")||ui.contains(t.target)||(debugMode?alert("Clicked element: "+t.target.tagName+"\n\n"+t.target.outerHTML):(textInput.value=t.target.innerText,htmlTextarea.value=t.target.outerHTML,document.body.appendChild(ui),ui.style.pointerEvents="auto",eventItem=t,textButtonClickListener=function(){eventItem.target.innerText=textInput.value,document.body.removeChild(ui)},textButton.addEventListener("click",textButtonClickListener),htmlButtonClickListener=function(){eventItem.target.outerHTML=htmlTextarea.value,document.body.removeChild(ui)},htmlButton.addEventListener("click",htmlButtonClickListener)))}),documentClickHandler=function(t){(t.target===ui||ui.contains(t.target))&&t.stopPropagation()},document.addEventListener("click",documentClickHandler),window.addEventListener("resize",function(){ui.style.top="20px",ui.style.right="20px"});var script=document.currentScript,parentTagName="Unknown";try{parentTagName=script.parentNode?script.parentNode.tagName:"Unknown"}catch(t){parentTagName="Unknown (error -> sent to console)",console.error("❎ Error during initialization "+t)}alert("Custom Inspect v1.1 injected successfully. Injected to: "+parentTagName);
```


