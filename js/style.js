document.getElementById("btnoff").addEventListener("click", function () {
  document.getElementById("offlight").setAttribute("style", "display: block;");
  document.getElementById("onlight").setAttribute("style", "display: none;");
  document.getElementById("off").setAttribute("style", "display: block;");
  document.getElementById("on").setAttribute("style", "display: none;");
});

document.getElementById("btnon").addEventListener("click", function () {
  document.getElementById("onlight").setAttribute("style", "display: block;");
  document.getElementById("offlight").setAttribute("style", "display: none;");
  document.getElementById("on").setAttribute("style", "display: block;");
  document.getElementById("off").setAttribute("style", "display: none;");
});
