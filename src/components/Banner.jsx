import { useEffect, React } from 'react';
import $ from 'jquery'; 

function Banner() {
  return (
    <div className="banner">
            <div className="container">
              <div className="slider">
                <div id="top" className="callbacks_container-wrap">
                  <ul className="rslides" id="slider3">
                    <li>
                      <div className="slider-info" data-aos="fade-left">
                        <h6>PARTY OF THIS YEAR</h6>
                        <h3>Happy New Year</h3>
                        <p>
                          Curabitur eget metus eget erat vehicula semper vitae
                          sed leo
                        </p>
                        <div className="more-button">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slider-info" data-aos="fade-left">
                        <h6>PARTY OF THIS YEAR</h6>
                        <h3>WE HOLD ANY EVENT</h3>
                        <p>
                          Quisque nisl risus, egestas in convallis vitae,
                          fringilla cursus magna
                        </p>
                        <div className="more-button">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slider-info" data-aos="fade-left">
                        <h6>PARTY OF THIS YEAR</h6>
                        <h3> LIGHT YOUR NIGHT</h3>
                        <p>
                          {" "}
                          Suspendisse bibendum dictum metus, at finibus elit
                          dignissim nec{" "}
                        </p>
                        <div className="more-button">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Banner