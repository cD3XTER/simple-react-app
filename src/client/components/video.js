function Video() {
  return (
    <div className="video">
      <video autoPlay playsInline loop muted>
        <source data-src="https://cdn.cuberto.com/cb/hello/overview/bg.mp4" type="video/mp4" src="https://cdn.cuberto.com/cb/hello/overview/bg.mp4" />
      </video>
    </div>
  );
}

export default Video;

