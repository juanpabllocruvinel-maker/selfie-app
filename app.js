let cameraService;

if (USE_MOCK_CAMERA) {
  cameraService = new MockCameraService();
} else {
  cameraService = new RealCameraService();
}

const video = document.getElementById("video");
const button = document.getElementById("captureBtn");
const result = document.getElementById("result");

cameraService.startCamera(video);

button.addEventListener("click", () => {
  const image = cameraService.capture(video);
  result.src = image;
});
