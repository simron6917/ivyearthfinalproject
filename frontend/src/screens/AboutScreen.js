 import React from 'react'
import Header from '../components/Header'
import {Container} from 'react-bootstrap'
const AboutScreen = () => {
  return(
    
  
<>
<Header />
<Container className="py-4">
    <div className="container-fluid text-center about-container">
      <div className="row">
        <div className="col-md-12 about-first">
          <h1 className="about-title">Ivy Earth</h1>
          <p>
            Sustainable gardening, also known as self-sufficient gardening, is a fancy term for growing fruits, vegetables, grass and shrubs, in a manner that does not use harmful pesticides, and promotes a continuous harvest that does not damage the environment. But today, it takes a little bit of effort and focuses to practice sustainable gardening, and with the bustle of everyday life, time is at a premium. Hence, our website aims to provide this information by recommending as user's needs.
          </p>
        </div>
      </div>

      <div className="section-2">
        <div className="container text-center">
          <h1 className="text-dark">The Developers</h1>
          <p className="text-secondary">
          Project developers checks wheather it follows all regulations or not to complete the project on time and under the budget. They staff the project and make necessary purchases. Their tasks are to report and resolve issues blocking work on project elements, develop project timeline and milestones with mitigation planning, and establish critical requirements of a project through stakeholder assessment.
          </p>
        </div>
        <br />
        <div className="team row div-dev" >
          <div className="col-md-3 col-12 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src="images/dikshya.jpg"
                  alt="member"
                  className="img-fluid rounded-circle w-60 p-4"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Dikshya Chettri</h3>
                <p className="text-black-50">Student at Trinity</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-12 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src="images/rishav1.jpg"
                  alt="member"
                  className="img-fluid rounded-circle w-50.5 p-4"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Rishav pokharel</h3>
                <p className="text-black-50">Student at Trinity</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src="images/simron.jpg"
                  alt="member"
                  className="img-fluid rounded-circle w-55 p-4"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Simron Shrestha</h3>
                <p className="text-black-50">Student at Trinity</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src="images/supriya.jpg"
                  alt="member"
                  className="img-fluid rounded-circle w-55 p-4"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title" >Supriya Malla</h3>
                <p className="text-black-50">Student at Trinity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</Container>

</>
  )

}
export default AboutScreen