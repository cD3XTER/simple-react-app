function Bgvideo() {
  return (
    <div className="bgvideo">
      <video autoPlay playsInline loop muted>
        <source data-src="/bg.mp4" type="video/mp4" src="bg.mp4" />
      </video>
    </div>
  )
}
export default Bgvideo