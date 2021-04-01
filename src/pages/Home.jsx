import React from 'react';
import logo1 from '../images/logo1.svg';


const Home = () => {
    return (
        <>
          <section id="header" className="">
              <div className="container-fluid nav_bg">
                  <div className="row">
                      <div className="col-10 mx-auto">
                          <div className="col-md-6 col-sm-12 mt-5 pt-lg-0 order-2 order-lg-1">
                              <img className="ml-5" src={logo1} alt=""/>
                              <h1 className="text-light mt-4" >Welcome to the Accelerator</h1>
                              <hr className="line mt-4"/>
                              <p className="text-light mt-4 font-weight-light text_cont">Click the button below to begin your journey toward real estate financial modeling excellence.</p>
                              <button type="button" className="btn main_btn">Get Started</button>
                          </div>
                          <div className="col-md-6 col-sm-12">

                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}

export default Home ;
