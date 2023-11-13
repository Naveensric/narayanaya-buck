import React from "react";

class EventSection extends React.Component{
render(){
    return(
        <>

<section id="events" class="events">
      <div class="container-fluid" data-aos="fade-up">

        <div class="section-header">

          <p>Share <span>Your Moments</span> In Our Temple</p>
        </div>

        <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" >
              <h3>Custom weekly Puja Timings</h3>
              <div class="price align-self-start">working hours</div>
              <p class="description">
              In our office working time 8:30 AM to 1:00 PM. 4:00 PM to 8:30 PM. Commissioner of Hindu Religious Charities, Mr. M. 113761 99 Day 22 .12 . 2000 sanctioned tickets details:
              </p>
              <br></br>
              <p class="description">
              <li>1. Ashdodram</li>
                  2. Camphor Harathi
                  3. Sakasranamam
                  4. To plate the raksha
                  5. To perform Rakshabandhanam
                  6. Sandalwood protection
                  7. Snapana Thirumanjanam
                  8. Chinna Thirumanjanam
                  9. Perumal Departure Fee
                  10. Laksharchanai
                  11. Gift Receipt Gold Silver Vessel Circular Cattle Receipt
                  12. Lottery
                  13. Vadaimalai Satta
                  14. To make Vadaimala
                  15. Other marriage
                  16. Mango light
                  17. Ear piercing
                  18. Marriage fees
                  19. Hair Charge
              </p>

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
export default EventSection;