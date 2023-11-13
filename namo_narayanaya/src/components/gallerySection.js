import React from "react";


class GallerySection extends React.Component{
render(){
    return(
        <>
        
        <section id="gallery" class="gallery section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">

          <p>Check <span>Our Gallery</span></p>
        </div>

<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.gunaseelamtemple.com/images/img/start_1.jpg" class="d-block w-100 img-fluid" alt="Slide 1"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_2.jpg" class="d-block w-100 img-fluid" alt="Slide 2"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_3.jpg" class="d-block w-100 img-fluid" alt="Slide 3"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_4.jpg" class="d-block w-100 img-fluid" alt="Slide 4"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_5.jpg" class="d-block w-100 img-fluid" alt="Slide 5"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_6.jpg" class="d-block w-100 img-fluid" alt="Slide 6"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.gunaseelamtemple.com/images/img/start_7.jpg" class="d-block w-100 img-fluid" alt="Slide 7"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



      </div>
    </section>
        
        
        </>
)
}
}
export default GallerySection;