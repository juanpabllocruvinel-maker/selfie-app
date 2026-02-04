class RealCameraService {

  async startCamera(videoElement) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }
    });

    videoElement.srcObject = stream;
  }

  capture(videoElement) {
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoElement, 0, 0);

    return canvas.toDataURL("image/png");
  }
}

// ------------------------

class MockCameraService {

  async startCamera(videoElement) {
    videoElement.style.display = "none";
  }

  capture() {
    return "assets/mock-selfie.jpg";
  }
}
