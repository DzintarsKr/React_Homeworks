function VideoComponent() {
  return (
    <div>
      <h2>Видео</h2>
      <video width="400" controls>
        <source src="https://w3schools.com" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
export default VideoComponent;