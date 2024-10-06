import React from "react";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      {/* w3-banner */}
      <div className="w3-banner jarallax">
        <div className="wthree-different-dot">
          <div className="head">
            <div className="container">
              <div className="navbar-top">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div className="navbar-brand logo ">
                    <h1>
                      <a href="index.html">New Party</a>
                    </h1>
                  </div>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav link-effect-4">
                    <li className="active first-list">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#about" className="scroll">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="scroll">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#gallery" className="scroll">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span data-letters="Pages">More</span>
                        <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#client" className="scroll">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="#pricing" className="scroll">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="#team" className="scroll">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#event" className="scroll">
                            Events
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#book" className="scroll">
                        Booking
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.navbar-collapse */}
              </div>
            </div>
          </div>
          {/* banner */}
          <Banner/>
          {/* //banner */}
        </div>
      </div>
      {/* //w3-banner */}
      {/* modal */}
      <div
        className="modal about-modal fade"
        id="myModal"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">New Party</h4>
            </div>
            <div className="modal-body">
              <div className="agileits-w3layouts-info">
                <img src="assets/images/g1.jpg" alt="" />
                <p>
                  Duis venenatis, turpis eu bibendum porttitor, sapien quam
                  ultricies tellus, ac rhoncus risus odio eget nunc.
                  Pellentesque ac fermentum diam. Integer eu facilisis nunc, a
                  iaculis felis. Pellentesque pellentesque tempor enim, in
                  dapibus turpis porttitor quis. Suspendisse ultrices hendrerit
                  massa. Nam id metus id tellus ultrices ullamcorper. Cras
                  tempor massa luctus, varius lacus sit amet, blandit lorem.
                  Duis auctor in tortor sed tristique. Proin sed finibus sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //modal */}
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            About Us<span>Events Is A Professionally Managed Event</span>
          </h3>
          <div className="w3ls_banner_bottom_grids">
            <div
              className="col-md-4 agileits_services_grid"
              data-aos="fade-right"
            >
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g1.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <h3>SPECIAL PROGRAMS</h3>
              <p>
                Enjoy the event throughout the entire night and do not sleep
                till the morning easy.
              </p>
              <div className="w3layouts_more">
                <a href="#book" className="scroll">
                  Book Now
                </a>
              </div>
            </div>
            <div className="col-md-4 agileits_services_grid" data-aos="fade-up">
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g2.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <h3>TOP PROGRAMS</h3>
              <p>
                Enjoy the event throughout the entire night and do not sleep
                till the morning easy.
              </p>
              <div className="w3layouts_more">
                <a href="#book" className="scroll">
                  Book Now
                </a>
              </div>
            </div>
            <div
              className="col-md-4 agileits_services_grid"
              data-aos="fade-left"
            >
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g3.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <h3>NON-STOP PARTY</h3>
              <p>
                Enjoy the event throughout the entire night and do not sleep
                till the morning easy.
              </p>
              <div className="w3layouts_more">
                <a href="#book" className="scroll">
                  Book Now
                </a>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="services jarallax" id="services">
        <h3 className="heading-agileinfo" data-aos="zoom-in">
          Services
          <span className="thr">Events Is A Professionally Managed Event</span>
        </h3>
        <div className="container">
          <div className="col-md-4 ser-1" data-aos="fade-right">
            <div className="grid1">
              <h4>VIP SERVICE</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 ser-1" data-aos="fade-down">
            <div className="grid1">
              <h4>NEWYEAR PARTIES</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 ser-1" data-aos="fade-left">
            <div className="grid1">
              <h4>HEN PARTIES</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 ser-1" data-aos="fade-right">
            <div className="grid1">
              <h4>COMMERCIAL SHOOTS</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 ser-1" data-aos="fade-up">
            <div className="grid1">
              <h4>BRANDED EVENTS</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 ser-1" data-aos="fade-left">
            <div className="grid1">
              <h4>CORPORATE EVENTS</h4>
              <p>
                Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem{" "}
              </p>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //services */}
      {/* Portfolio section */}
      <section className="portfolio-agileinfo" id="gallery">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Gallery<span>Events Is A Professionally Managed Event</span>
          </h3>
          <div className="gallery-grids">
            <div className="tab_img">
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g1.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g1.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g3.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g3.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g4.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g4.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g5.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g5.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g6.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g6.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g7.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g7.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g8.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g8.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-6 portfolio-grids"
                data-aos="zoom-in"
              >
                <a
                  href="assets/images/g2.jpg"
                  className="b-link-stripe b-animate-go lightninBox"
                  data-lb-group={1}
                >
                  <img
                    src="assets/images/g2.jpg"
                    className="img-responsive"
                    alt="w3ls"
                  />
                  <div className="b-wrapper">
                    <i className="fa fa-search-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Portfolio section */}
      {/* Clients */}
      <div className="clients-main jarallax" id="client">
        <div className="container">
          {/* Owl-Carousel */}
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            TESTIMONIALS
            <span className="thr">
              Events Is A Professionally Managed Event{" "}
            </span>
          </h3>
          <div className="cli-ent" data-aos="fade-down">
            <section className="slider">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <div className="item g1">
                      <div className="agile-dish-caption">
                        <img className="lazyOwl" src="assets/images/1.png" alt="" />
                        <h4>Franklin</h4>
                        <span>Lorem Ipsum</span>
                      </div>
                      <div className="clearfix" />
                      <p className="para-w3-agile">
                        <span className="fa fa-quote-left" aria-hidden="true" />
                        Duis nulla nulla, faucibus id diam ac, luctus sodales
                        purus. Quisque nibh ipsum,Ut accumsan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item g1">
                      <div className="agile-dish-caption">
                        <img className="lazyOwl" src="assets/images/3.png" alt="" />
                        <h4>Anderson</h4>
                        <span>Lorem Ipsum</span>
                      </div>
                      <div className="clearfix" />
                      <p className="para-w3-agile">
                        <span className="fa fa-quote-left" aria-hidden="true" />
                        Duis nulla nulla, faucibus id diam ac, luctus sodales
                        purus. Quisque nibh ipsum,Ut accumsan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item g1">
                      <div className="agile-dish-caption">
                        <img className="lazyOwl" src="assets/images/2.png" alt="" />
                        <h4>Williamson</h4>
                        <span>Lorem Ipsum</span>
                      </div>
                      <div className="clearfix" />
                      <p className="para-w3-agile">
                        <span className="fa fa-quote-left" aria-hidden="true" />
                        Duis nulla nulla, faucibus id diam ac, luctus sodales
                        purus. Quisque nibh ipsum,Ut accumsan.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/*// Owl-Carousel */}
        </div>
      </div>
      {/*// Clients */}
      <div className="pricing" id="pricing">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Pricing<span>Events Is A Professionally Managed Event</span>
          </h3>
          <div className="w3ls_banner_bottom_grids">
            <div
              className="col-md-4 agileits_services_grid"
              data-aos="fade-right"
            >
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g4.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <div className="pr-ta">
                <h3>Table deposit</h3>
                <p>Save the spot and be the first to party.</p>
                <span className="moto-color1_3">
                  <i className="fa fa-calendar-check-o" aria-hidden="true" />
                  &nbsp; December 28, 2017
                </span>
                <div className="tabl-erat">
                  <div className="col-md-5 ratt">
                    <h6>$99.55</h6>
                  </div>
                  <div className="col-md-7 tag">
                    <a href="#book" className="scroll">
                      Book Now
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-md-4 agileits_services_grid" data-aos="fade-up">
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g5.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <div className="pr-ta">
                <h3>Table deposit</h3>
                <p>Save the spot and be the first to party.</p>
                <span className="moto-color1_3">
                  <i className="fa fa-calendar-check-o" aria-hidden="true" />
                  &nbsp; December 28, 2017
                </span>
                <div className="tabl-erat">
                  <div className="col-md-5 ratt">
                    <h6>$99.55</h6>
                  </div>
                  <div className="col-md-7 tag">
                    <a href="#book" className="scroll">
                      Book Now
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div
              className="col-md-4 agileits_services_grid"
              data-aos="fade-left"
            >
              <div className="w3_agile_services_grid1">
                <img src="assets/images/g6.jpg" alt=" " className="img-responsive" />
                <div className="w3_blur" />
              </div>
              <div className="pr-ta">
                <h3>Table deposit</h3>
                <p>Save the spot and be the first to party.</p>
                <span className="moto-color1_3">
                  <i className="fa fa-calendar-check-o" aria-hidden="true" />
                  &nbsp; December 28, 2017
                </span>
                <div className="tabl-erat">
                  <div className="col-md-5 ratt">
                    <h6>$99.55</h6>
                  </div>
                  <div className="col-md-7 tag">
                    <a href="#book" className="scroll">
                      Book Now
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* register */}
      <div className="register-sec-w3l jarallax" id="book">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Book An Event
            <span className="thr">
              Events Is A Professionally Managed Event
            </span>
          </h3>
          <div className="book-appointment" data-aos="zoom-in">
            <form action="#" method="post">
              <div className="gaps">
                <p />
                <input type="text" name="Name" placeholder="Name" required="" />
              </div>
              <div className="gaps">
                <p />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="gaps">
                <p />
                <input
                  type="text"
                  name="Phone Number"
                  placeholder="Phone Number"
                  required=""
                />
              </div>
              <div className="gaps">
                <textarea
                  name="Message"
                  placeholder="Message..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <input type="submit" defaultValue="Book Now" />
            </form>
          </div>
        </div>
      </div>
      {/* //register */}
      {/* Team section */}
      <section className="team" id="team">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            OUR DJ TEAM<span>Events Is A Professionally Managed Event</span>
          </h3>
          <div className="team-grid-top">
            <div className="col-md-3 team1" data-aos="fade-right">
              <div className="inner-team1">
                <img src="assets/images/t1.jpg" alt="" />
                <h3>Steve</h3>
                <h4>Lorem</h4>
                <p>Lorem ipsum dolor sit amet, Phasselleous carnivel dolor</p>
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 team1" data-aos="fade-down">
              <div className="inner-team1">
                <img src="assets/images/t3.jpg" alt="" />
                <h3>Smith</h3>
                <h4>Lorem</h4>
                <p>Lorem ipsum dolor sit amet, Phasselleous carnivel dolor</p>
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 team1" data-aos="fade-up">
              <div className="inner-team1">
                <img src="assets/images/t2.jpg" alt="" />
                <h3>Warner</h3>
                <h4>Lorem</h4>
                <p>Lorem ipsum dolor sit amet, Phasselleous carnivel dolor</p>
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 team1" data-aos="fade-left">
              <div className="inner-team1">
                <img src="assets/images/t4.jpg" alt="" />
                <h3>Watson</h3>
                <h4>Lorem</h4>
                <p>Lorem ipsum dolor sit amet, Phasselleous carnivel dolor</p>
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </section>
      {/* //Team section */}
      {/* Stats */}
      <div className="stats news-w3layouts jarallax">
        <div className="container">
          <div className="stats-agileinfo agileits-w3layouts">
            <div className="col-sm-3 col-xs-6 stats-grid" data-aos="fade-right">
              <div className="stats-img">
                <i className="fa fa-users" aria-hidden="true" />
              </div>
              <p>hours of music were played</p>
              <div
                className="numscroller numscroller-big-bottom"
                data-slno={1}
                data-min={0}
                data-max={157000}
                data-delay=".5"
                data-increment={100}
              >
                157000
              </div>
            </div>
            <div className="col-sm-3 col-xs-6 stats-grid" data-aos="fade-up">
              <div className="stats-img w3-agileits">
                <i className="fa fa-calendar-check-o" aria-hidden="true" />
              </div>
              <p>parties last month</p>
              <div
                className="numscroller numscroller-big-bottom"
                data-slno={1}
                data-min={0}
                data-max={850}
                data-delay={8}
                data-increment={1}
              >
                850
              </div>
            </div>
            <div className="col-sm-3 col-xs-6 stats-grid" data-aos="fade-down">
              <div className="stats-img w3-agileits">
                <i className="fa fa-briefcase" aria-hidden="true" />
              </div>
              <p>visitors last month</p>
              <div
                className="numscroller numscroller-big-bottom"
                data-slno={1}
                data-min={0}
                data-max={5000}
                data-delay=".5"
                data-increment={10}
              >
                5000
              </div>
            </div>
            <div className="col-sm-3 col-xs-6 stats-grid" data-aos="fade-left">
              <div className="stats-img w3-agileits">
                <i className="fa fa-trophy" aria-hidden="true" />
              </div>
              <p>residents played</p>
              <div
                className="numscroller numscroller-big-bottom"
                data-slno={1}
                data-min={0}
                data-max={110}
                data-delay={8}
                data-increment={1}
              >
                110
              </div>
            </div>
            <div className="clearfix" />
          </div>
          {/* Progressive-Effects-Animation-JavaScript */}
          {/* //Progressive-Effects-Animation-JavaScript */}
        </div>
      </div>
      {/* //Stats */}
      {/* event schedule */}
      <div className="event-time " id="event">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            News &amp; Events
            <span>Events Is A Professionally Managed Event</span>
          </h3>
          <div className="testi-info">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#testi"
                  aria-controls="testi"
                  role="tab"
                  data-toggle="tab"
                >
                  2016
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#profile"
                  aria-controls="profile"
                  role="tab"
                  data-toggle="tab"
                >
                  2017
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#messages"
                  aria-controls="messages"
                  role="tab"
                  data-toggle="tab"
                >
                  2018
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="testi">
                <div className="eventmain-info">
                  <div className="event-subinfo">
                    <div className="col-md-6  w3-latest-grid">
                      <div
                        className="col-md-6 col-xs-6 event-right eventtxt-right"
                        data-aos="fade-down"
                      >
                        <img
                          src="assets/images/g7.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div
                        className="col-md-6 col-xs-6 event-left"
                        data-aos="fade-right"
                      >
                        <h5>31 Dec,2016.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div
                        className="col-md-6 col-xs-6 event-right"
                        data-aos="fade-up"
                      >
                        <img
                          src="assets/images/g1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div
                        className="col-md-6 col-xs-6 event-left in-news"
                        data-aos="fade-right"
                      >
                        <h5>31 Dec,2016.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="event-subinfo">
                    <div className="col-md-6 w3-latest-grid">
                      <div
                        className="col-md-6 col-xs-6 event-right  eventtxt-right"
                        data-aos="fade-down"
                      >
                        <img
                          src="assets/images/g3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div
                        className="col-md-6 col-xs-6 event-left"
                        data-aos="fade-left"
                      >
                        <h5>31 Dec,2016.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div
                        className="col-md-6 col-xs-6 event-right"
                        data-aos="fade-up"
                      >
                        <img
                          src="assets/images/g5.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div
                        className="col-md-6 col-xs-6 event-left in-news"
                        data-aos="fade-right"
                      >
                        <h5>31 Dec,2016.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="profile">
                <div className="eventmain-info">
                  <div className="event-subinfo">
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right eventtxt-right">
                        <img
                          src="assets/images/g8.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left">
                        <h5>31 Dec,2017.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right">
                        <img
                          src="assets/images/g7.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left in-news">
                        <h5>31 Dec,2017.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="event-subinfo">
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right  eventtxt-right">
                        <img
                          src="assets/images/g6.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left">
                        <h5>31 Dec,2017.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right">
                        <img
                          src="assets/images/g5.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left in-news">
                        <h5>31 Dec,2017.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>{" "}
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="messages">
                <div className="eventmain-info">
                  <div className="event-subinfo">
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right eventtxt-right">
                        <img
                          src="assets/images/g4.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left">
                        <h5>31 Dec,2018.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right">
                        <img
                          src="assets/images/g3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left in-news">
                        <h5>31 Dec,2018.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="event-subinfo">
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right  eventtxt-right">
                        <img
                          src="assets/images/g2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left">
                        <h5>31 Dec,2018.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="col-md-6 w3-latest-grid">
                      <div className="col-md-6 col-xs-6 event-right">
                        <img
                          src="assets/images/g1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-xs-6 event-left in-news">
                        <h5>31 Dec,2018.</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit
                        </p>
                        <h6>
                          <span className="icon-event" aria-hidden="true">
                            venue:
                          </span>
                          Madison Avenue
                        </h6>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          view details
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //event schedule */}
      {/* map */}
      <div className="frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690415.8595893653!2d-74.7110867032345!3d40.6473139136453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25896356b49af%3A0xf92eb4d6b65851e5!2sMadison+Ave%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1513403926503"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
      {/* //map */}
      {/* footer */}
      <div className="footer">
        <div className="container">
          <div className="f-bg-w3l">
            <div
              className="col-md-4 w3layouts_footer_grid"
              data-aos="fade-right"
            >
              <h2>Contact Information</h2>
              <ul className="con_inner_text">
                <li>
                  <span className="fa fa-map-marker" aria-hidden="true" />
                  1234k Avenue, 4th block, <label> New York City.</label>
                </li>
                <li>
                  <span className="fa fa-envelope-o" aria-hidden="true" />{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <span className="fa fa-phone" aria-hidden="true" /> +1234 567
                  567
                </li>
              </ul>
              <ul className="social_agileinfo">
                <li>
                  <a href="#" className="w3_facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w3_twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w3_instagram">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w3_google">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-4 w3layouts_footer_grid"
              data-aos="fade-down"
            >
              <h2>Subscribe Newsletter</h2>
              <p>
                By subscribing to our mailing list you will always get latest
                news from us.
              </p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email..."
                  required=""
                />
                <button className="btn1">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </button>
                <div className="clearfix"> </div>
              </form>
            </div>
            <div
              className="col-md-4 w3layouts_footer_grid"
              data-aos="fade-left"
            >
              <h3>Recent Events</h3>
              <ul className="con_inner_text midimg">
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g2.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g3.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g4.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g5.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g6.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g7.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g8.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#myModal">
                    <img
                      src="assets/images/g1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <p className="copyright" data-aos="zoom-in">
          © 2017 New Party. All Rights Reserved | Design by{" "}
          <a href="https://w3layouts.com/" target="_blank">
            w3layouts
          </a>
        </p>
      </div>
      {/* //footer */}
    </>
  );
}

export default Home;
