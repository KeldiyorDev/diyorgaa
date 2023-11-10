import React from 'react'

function Home() {
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

            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted CryptoCoin</h1>
                            <p className="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                magna dolore erat amet</p>
                            <a href="/read" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="img/hero-1.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/about.png" alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6">About Us</h1>
                                <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                    diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Tempor erat elitr rebum at clita</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Tempor erat elitr rebum at clita</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Tempor erat elitr rebum at clita</span>
                                </div>
                                <a className="btn btn-primary py-3 px-4" href="/read">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid mb-4" src="img/icon-9.png" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Today Transactions</p>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
                            <img className="img-fluid mb-4" src="img/icon-10.png" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
                            <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Total Transactions</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Why Us!</h1>
                        <p className="text-primary fs-5 mb-5">The Best In The crypto Industry</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-7.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Easy To Start</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-6.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Safe & Secure</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-5.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Affordable Plans</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-4.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Secure Storage</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-3.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Protected By Insurance</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-start">
                                <img className="img-fluid flex-shrink-0" src="img/icon-8.png" alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">24/7 Support</h5>
                                    <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Services</h1>
                        <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-7.png" alt="" />
                                <h5 className="mb-3">Currency Wallet</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h5 className="mb-3">Currency Transaction</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-9.png" alt="" />
                                <h5 className="mb-3">Bitcoin Investment</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-5.png" alt="" />
                                <h5 className="mb-3">Currency Exchange</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h5 className="mb-3">Bitcoin Escrow</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-8.png" alt="" />
                                <h5 className="mb-3">Token Sale</h5>
                                <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo</p>
                                <a href="/read">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Roadmap</h1>
                        <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
                    </div>
                    <div className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>January 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>March 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>May 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>July 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>September 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                        <div className="roadmap-item">
                            <div className="roadmap-point"><span></span></div>
                            <h5>November 2045</h5>
                            <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Token Sale</h1>
                        <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Days</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Hours</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Minutes</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Seconds</span>
                            </div>
                        </div>
                        <div className="col-12 text-center py-4">
                            <a className="btn btn-primary py-3 px-4" href="/read">Buy Token</a>
                        </div>
                        <div className="col-12 text-center">
                            <img className="img-fluid m-1" src="img/payment-1.png" alt="" style={{ width: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-2.png" alt="" style={{ width: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-3.png" alt="" style={{ width: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-4.png" alt="" style={{ width: "50px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">FAQs</h1>
                        <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How to build a website?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How long will it take to get a new website?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do you only create HTML websites?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Will my website be mobile-friendly?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Will you maintain my site for me?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            I’m on a strict budget. Do you have any low cost options?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.7s">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            Will you maintain my site for me?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            I’m on a strict budget. Do you have any low cost options?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                            diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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

export default Home