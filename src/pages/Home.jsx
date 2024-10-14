import React from "react";
import MeetTeam from "../components/MeetTeam";
import DemoPlayback from "../../assets/videos/DemoPlayback.mp4";


function Home() {
  return (
    <>
      
                <div className="bg-video">
                  <video
                    src={DemoPlayback}
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                  />
                </div>

      <section className="professional_section layout_padding-bottom container">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box">
                <h1>Real Time</h1>
                <h2>AI Style Transfer</h2>
                
                
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box">
                <img src="../../assets/images/TitleImage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image_section layout_padding-bottom container h2">
        <div className="container">
        <h2>Image Comparison Type Shit!</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi molestias voluptates quod commodi! Architecto reiciendis sint a, optio, voluptatibus modi animi fugiat totam officiis eos, quia ipsum. Quas, sint?
          </p>
        </div>
        
     
         

    </section>
      <section className="about_section layout_padding-bottom container">
     
          <MeetTeam/>
     
       </section>
      

      <section className="info_section container">
       
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-phone" aria-hidden="true" />
                        </div>
                        <p>+02 1234567890</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                        <p>demo@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        <div className="social-box">
          <h4>Follow Us</h4>
          <div className="box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-youtube" aria-hidden="true" />
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      {/* end info_section */}
      {/* footer section */}
      
      {/* footer section */}
    </>
  );
}

export default Home;
