import React from 'react'

function About() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h2 className="m-0 text-primary"><img className="img-fluid me-2" src="img/icon-1.png" alt=""
                        style={{ width: "45px" }} />CryptoCoin</h2>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-4 py-lg-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="roadmap.html" className="nav-item nav-link">Roadmap</a>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu shadow-sm m-0">
                                <a href="feature.html" className="dropdown-item">Feature</a>
                                <a href="token.html" className="dropdown-item">Token Sale</a>
                                <a href="faq.html" className="dropdown-item">FAQs</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="/ins"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="/ins"><i
                            className="fab fa-twitter"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="/ins"><i
                            className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </nav>

















            <div className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h1 className="text-primary mb-4"><img className="img-fluid me-2" src="img/icon-1.png" alt=""
                                style={{ width: "45px" }} />CryptoCoin</h1>
                            <span>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                                stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
                                et lorem et sit.</span>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mb-4">Newsletter</h5>
                            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
                            <div className="position-relative">
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email" />
                                <button type="button"
                                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Our Services</h5>
                            <a className="btn btn-link" href="/read">Currency Wallet</a>
                            <a className="btn btn-link" href="/read">Currency Transaction</a>
                            <a className="btn btn-link" href="/read">Bitcoin Investment</a>
                            <a className="btn btn-link" href="/read">Token Sale</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="/read">About Us</a>
                            <a className="btn btn-link" href="/read">Contact Us</a>
                            <a className="btn btn-link" href="/read">Our Services</a>
                            <a className="btn btn-link" href="/read">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Follow Us</h5>
                            <div className="d-flex">
                                <a className="btn btn-square rounded-circle me-1" href="/read"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href="/read"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href="/read"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href="/read"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="/">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a> Distributed By <a
                                    href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About