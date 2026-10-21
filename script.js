// Runs on mouseover and on keyboard focus: show the image + its alt text in the preview.
function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  var preview = document.getElementById("image");
  preview.innerHTML = previewPic.alt;
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Runs on mouseleave and on blur: restore the original preview.
function undo() {
  console.log("undo triggered");

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "url('')";
  preview.innerHTML = "Hover over an image below to display here.";
}

// Runs on page load: make every image reachable with the Tab key.
function addTabFocus() {
  console.log("Page loaded - adding tabindex to images");

  var images = document.querySelectorAll(".thumb");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}
