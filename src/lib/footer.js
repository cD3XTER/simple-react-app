function Footer(){
    return(
    <div className="footer">
        <footer className="text-center text-white" style={{backgroundColor: '#000000'}}>
            <div className="container pt-4">
                <section className="mb-4">
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"data-mdb-ripple-color="dark">
                        <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/simo_chiriaco/" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"role="button" data-mdb-ripple-color="dark">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                    <i className="fab fa-github"></i>
                </a>
                </section>
            </div>
            <div className="text-center  p-3" style={{backgroundColor: '#000000'}}>
                © 2023 Copyright:
                <a href="https://mdbootstrap.com/"> Simone Chiriaco</a>
            </div>
        </footer>
    </div>
    )
}
export default Footer