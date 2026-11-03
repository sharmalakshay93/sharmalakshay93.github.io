/* Research page: "Cite" buttons toggle a BibTeX box; "Copy" copies it to the clipboard.
   Markup comes from _includes/publication-entry.html. */
(function () {
  function selectText(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function flash(button, label) {
    button.textContent = label;
    setTimeout(function () { button.textContent = "Copy"; }, 1500);
  }

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-cite-toggle]");
    if (toggle) {
      var box = document.getElementById(toggle.getAttribute("aria-controls"));
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      box.hidden = isOpen;
      return;
    }

    var copy = event.target.closest("[data-cite-copy]");
    if (copy) {
      var code = copy.parentElement.querySelector("code");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code.textContent).then(
          function () { flash(copy, "Copied!"); },
          function () { selectText(code); flash(copy, "Selected"); }
        );
      } else {
        // No clipboard access (e.g. plain http): select the text so it can be copied by hand.
        selectText(code);
        flash(copy, "Selected");
      }
    }
  });
})();
