console.log("devtools_page");
chrome.devtools.panels.create(
  "Michée",
  "icon-128.png",
  "devtools_panel.html",
  function (panel) {
    // code invoked on panel creation
    console.log("devtools_panel", panel);
  }
);
