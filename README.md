# What is it?
This is a script to load a custom Inspect using javascript for computers that may be locked by schools or businesses

# How do I use it?

Go to any website, go to the url bar and paste this:

```javascript
javascript: fetch("https://raw.githubusercontent.com/NotGhoull/customInspect/Beta/main.min.js").then(t=>t.text()).then(t=>{let e=document.createElement("script");e.innerHTML=t,document.body.appendChild(e)}).catch(t=>{alert("Error loading from URL: "+t)});
```
## It didn't work
if it didn't work, you can try load it this way:

```javascript
var link=document.createElement("link");link.setAttribute("rel","stylesheet"),link.setAttribute("type","text/css"),link.setAttribute("href","https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"),link.id="custom-inspect-import",document.head.appendChild(link);var faLink=document.createElement("link");faLink.setAttribute("rel","stylesheet"),faLink.setAttribute("type","text/css"),faLink.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),faLink.id="custom-inspect-import",document.head.appendChild(faLink);var debugMode=!1,eventItem=null,textButtonClickListener=null,htmlButtonClickListener=null,destroyButtonClickListener=null,documentClickHandler=null,lastItem=null,dontCloseOnAccept=!1,ui=document.createElement("div");ui.style.position="fixed",ui.style.top="0",ui.style.right="0",ui.style.width="300px",ui.style.height="100vh",ui.style.background="#111111",ui.style.borderLeft="1px solid #000",ui.style.padding="10px",ui.style.zIndex="9999",ui.id="ignore-custom-inspect",ui.style.pointerEvents="none",ui.style.fontFamily="'Lexend', sans-serif";var titleElement=document.createElement("div");titleElement.style.fontSize="18px",titleElement.style.fontWeight="bold",titleElement.style.color="white",titleElement.textContent="CustomInspect v2.0.0 - Beta";var githubLink=document.createElement("a");githubLink.href="https://github.com/notghoull/customInspect",githubLink.target="_blank",githubLink.textContent="View on GitHub",githubLink.style.display="inline-block",githubLink.style.padding="5px 10px",githubLink.style.marginLeft="0px",githubLink.style.color="white",githubLink.style.backgroundColor="#3366cc",githubLink.style.borderRadius="4px",githubLink.style.textDecoration="none";var githubIcon=document.createElement("i");githubIcon.classList.add("fab","fa-github"),githubIcon.style.marginRight="5px",githubLink.insertBefore(githubIcon,githubLink.firstChild),titleElement.appendChild(githubLink),ui.appendChild(titleElement);var selectedSection=document.createElement("div");selectedSection.style.marginTop="20px",selectedSection.style.marginBottom="20px",selectedSection.style.fontWeight="bold",selectedSection.textContent="Selected",selectedSection.style.color="white";var textInput=document.createElement("input");textInput.type="text",textInput.style.marginBottom="10px",textInput.style.width="100%",textInput.style.fontFamily="'Lexend', sans-serif",textInput.style.border="white 0px",textInput.style.borderRadius="5px",textInput.style.backgroundColor="white";var textButton=document.createElement("button");textButton.innerText="Save Text",textButton.style.fontFamily="'Lexend', sans-serif",textButton.style.marginRight="10px",textButton.style.border="white 0px",textButton.style.background="white",textButton.style.borderRadius="5px",selectedSection.appendChild(textInput),selectedSection.appendChild(textButton),ui.appendChild(selectedSection);var htmlEditorSection=document.createElement("div");htmlEditorSection.style.marginBottom="20px",htmlEditorSection.style.fontWeight="bold",htmlEditorSection.textContent="HTML EDITOR",htmlEditorSection.style.color="white",ui.appendChild(htmlEditorSection);var htmlTextarea=document.createElement("textarea");htmlTextarea.style.marginTop="10px",htmlTextarea.style.width="100%",htmlTextarea.style.height="200px",htmlTextarea.style.resize="none",htmlTextarea.style.fontFamily="'Lexend', sans-serif",htmlTextarea.style.backgroundColor="white",htmlTextarea.style.border="white 0px",htmlTextarea.style.borderRadius="5px";var htmlButton=document.createElement("button");htmlButton.innerText="Save HTML",htmlButton.style.fontFamily="'Lexend', sans-serif",htmlButton.style.backgroundColor="white",htmlButton.style.border="white 0px",htmlButton.style.borderRadius="5px",htmlButton.style.marginTop="5px",htmlEditorSection.appendChild(htmlTextarea),htmlEditorSection.appendChild(htmlButton),ui.appendChild(htmlEditorSection);var settingsSection=document.createElement("div");settingsSection.style.marginBottom="20px",settingsSection.style.fontWeight="bold",settingsSection.textContent="Settings",settingsSection.style.color="white";var betaTag=document.createElement("span");betaTag.style.fontSize="12px",betaTag.style.padding="3px 6px",betaTag.style.marginLeft="10px",betaTag.style.color="#fff",betaTag.style.backgroundColor="#f44336",betaTag.style.borderRadius="4px",betaTag.textContent="BETA";var closeOnAcceptOption=document.createElement("div");closeOnAcceptOption.style.display="flex",closeOnAcceptOption.style.alignItems="center",closeOnAcceptOption.style.paddingTop="5px";var closeOnAcceptLabel=document.createElement("label");closeOnAcceptLabel.style.marginRight="10px",closeOnAcceptLabel.style.fontFamily="'Lexend', sans-serif",closeOnAcceptLabel.style.color="white",closeOnAcceptLabel.textContent="Don't close on accept",closeOnAcceptLabel.style.paddingLeft="5px";var closeOnAcceptToggle=document.createElement("input");function refreshUI(){textInput.value=eventItem.target.innerText,htmlTextarea.value=eventItem.target.outerHTML}function removeOutline(){lastItem&&lastItem.target&&(lastItem.target.style.outline="none",lastItem.target.style.animation="none")}function removeEventListeners(){textButton.removeEventListener("click",textButtonClickListener),htmlButton.removeEventListener("click",htmlButtonClickListener),destroyButton.removeEventListener("click",destroyButtonClickListener),document.removeEventListener("click",documentClickHandler),(textButtonClickListener||htmlButtonClickListener||destroyButtonClickListener||documentClickHandler)&&confirm("Event listeners might still be active. Do you want to auto-refresh the page? (THIS WILL REVERT ALL CHANGES MADE)")&&window.location.reload()}closeOnAcceptToggle.type="radio",closeOnAcceptToggle.name="close-on-accept",closeOnAcceptToggle.checked=dontCloseOnAccept,closeOnAcceptToggle.addEventListener("click",function(){closeOnAcceptToggle.checked=!dontCloseOnAccept,dontCloseOnAccept=closeOnAcceptToggle.checked}),closeOnAcceptOption.appendChild(closeOnAcceptToggle),closeOnAcceptOption.appendChild(closeOnAcceptLabel),settingsSection.appendChild(betaTag),settingsSection.appendChild(closeOnAcceptOption),ui.appendChild(settingsSection),document.addEventListener("click",function(t){if(!t.target.closest("#ignore-custom-inspect")&&!ui.contains(t.target)|t.target==lastItem?.target){if(debugMode)alert("Clicked element: "+t.target.tagName+"\n\n"+t.target.outerHTML);else{lastItem&&lastItem.target&&(lastItem.target.style.outline="none",lastItem.target.style.animation="none"),textInput.value=t.target.innerText,htmlTextarea.value=t.target.outerHTML,document.body.appendChild(ui),ui.style.pointerEvents="auto",eventItem=t,textButtonClickListener=function(){eventItem.target.innerText=textInput.value,dontCloseOnAccept?refreshUI():(document.body.removeChild(ui),removeOutline())},textButton.addEventListener("click",textButtonClickListener),htmlButtonClickListener=function(){eventItem.target.outerHTML=htmlTextarea.value,dontCloseOnAccept?refreshUI():(document.body.removeChild(ui),removeOutline())},htmlButton.addEventListener("click",htmlButtonClickListener);var e=eventItem.target;e.style.outline="1px dotted blue",e.style.animation="custom-inspect-pulse 1s infinite alternate",e.addEventListener("animationend",function(){e.style.outline="none",e.style.animation="none"}),lastItem=t}}}),documentClickHandler=function(t){(t.target===ui||ui.contains(t.target))&&t.stopPropagation()},document.addEventListener("click",documentClickHandler),window.addEventListener("resize",function(){ui.style.top="0",ui.style.right="0"});var script=document.currentScript,parentTagName="Unknown";try{parentTagName=script.parentNode?script.parentNode.tagName:"Unknown"}catch(t){parentTagName="Unknown (error -> sent to console)",console.error("❎ Error during initialization "+t)}alert("CustomInspect v2.0.0b injected successfully. Injected to: "+parentTagName);var customInspectKeyframes=`@keyframes custom-inspect-pulse { from { outline-offset: 0; } to { outline-offset: -3px; } }`,customInspectStyle=document.createElement("style");customInspectStyle.innerHTML=customInspectKeyframes,document.head.appendChild(customInspectStyle);
```

## Further trouble shooting

I got nothin for you man 
