import React from "react";


class TestiMonaialsSection extends React.Component{
render(){
    return(
        <>
        
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <p>What Are They <span>Saying About Us</span></p>
        </div>

        <div class="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        The center provides free psychiatric treatment along with traditional worship.
                        
                        This is the first state sanctioned mental health rehabilitation center in Tamil Nadu. Details of rules for admission of inmates (mentally ill) in mental rehabilitation
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>

                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Those who want to join the mental rehabilitation center should come in person with the following certificates, get the application form from the temple office, fill it and attach the certificates. He should get his native certificate from the village administrative officer.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>

                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Psychiatrist Certification – Anyone can obtain a Psychiatrist certification.Candidates who wish to join the said center must be accompanied by their relative or close family friend who must stay in the center.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>

                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Residents of the center are taken to the Kaveri River for daily morning and evening bath and five times puja to the temple.Those who have joined the said center should regularly participate in the japayoga program held daily in the temple and benefit from it.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>

                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="https://m.media-amazon.com/images/I/81ExzhnrzLL._SL1500_.jpg" class="img-fluid testimonial-img" alt=""/>
                  </div>
                </div>
              </div>
            </div>

           

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>

        </>
        )
    }
  }
  export default TestiMonaialsSection;