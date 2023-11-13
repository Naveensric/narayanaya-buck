import React from "react";


class Home extends React.Component{
render(){
    return(
        <>

<section id="hero" class="hero d-flex align-items-center section-bg">
<div class="container">
  <div class="row justify-content-between gy-5">
    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
      <h2 data-aos="fade-up">Om Namo Narayanaya...<br />ஓம் நமோ நாராயணாய...</h2>
      <p class="markz" data-aos="fade-up" data-aos-delay="100">In this thiruthalam, Emperumal Sri Prasanna Venkatesan is depicted standing in a thirkolam. With sangam, chakra, varadahastam and katihastam on his chest, emperuman is doing sevaka, carrying a sulam in his right hand.</p>
      <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
        <a href="#book-a-table" class="btn-book-a-table">Book Ticket</a>
        <a href="https://www.youtube.com/watch?v=0c22eoZ2ZXw&list=PLXkITt1-UvR719-ODRrpQfye-pFd03QW2&index=4" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
      <img src="assets/img/hero-img.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
    </div>
  </div>
</div>
</section>
</>
    )
  }
}
export default Home;