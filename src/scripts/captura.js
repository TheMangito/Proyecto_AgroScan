var screenshotButton = document.getElementById("screenshot-vid-recording");
screenshotButton.addEventListener("click", onCapture);
var canvas = document.createElement("canvas")

function onCapture() {
  var video = document.querySelector("video");
  console.log(new Date(), "capture", video.videoWidth, video.videoHeight)
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  canvas.toBlob(async (blob) => {
    {
      const a = document.createElement('a') // Create "a" element
      const url = URL.createObjectURL(blob) // Create an object URL from blob
     console.log("capture", url)
     var img = new Image();
     img.src = url;
     document.body.appendChild(img);      
    };
  });
}
