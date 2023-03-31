import Navbar from './lib/Navbar';
import Footer from './lib/footer';
import Vid from './lib/vid';
import './App.css';

function App() {
  return (
    <>
      <section className='color'>
        <Navbar />
          <div className="title">
            <h1>Simone</h1>
            <h2>Chiriaco</h2>
          </div>
        <div className="info">
          <img src="./img-1.jpg"/>
        </div>
        <div className="info1">
          <p>Sono un ragazzo di 22 anni di Reggio Calabria,<br></br>
              appassionato fin da sempre di fotografia,<br></br>
              passione che per varii motivi ho dovuto accantonare,<br></br>
              durante l'adolescenza a 18, per una serie fortuita di eventi,<br></br>
              mi sono ritrovato a fare a fare il video-maker nell'ambito degli evnti<br></br>
              riscoprendo così la mia passione, ma sotto forma del video-making      
          </p>
        </div>
        <div className="sec1">
         <h2>il mio sogno</h2>
         <i className="fa-solid fa-video"></i>
         <p>il mio sogno è quello di riuscire attraverso il <span>Video-Making</span><br></br>
        di raccontare la mia più grande passione, quella dell'<span>Automotive</span></p>
        <br></br>
        <h3>Ultimo video</h3>
        <Vid />
      <div className="sec2">
       <Footer />
      </div>
    </div>
      </section>
    </>
  );
}

export default App;
