        
import React from "react";


class Contactz extends React.Component{
render(){
    return(
        <>
         <section id="book-a-table" class="book-a-table">
          <div class="container" data-aos="fade-up">

            <div class="section-header">

              <p>Book <span>Your Stay</span> With Us</p>
            </div>

            <div class="row g-0">
            <img src="https://www.gunaseelamtemple.com/bank.jpg" alt="" />
            </div>

          </div>
        </section>
        
        <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">

          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div class="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.811073186454!2d78.56497407387064!3d10.901958289254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa598017e9a99f%3A0x6e737322c395957a!2sGunaseelam%20Sri%20Prasanna%20Venkatachalapathy%20Temple!5e0!3m2!1sen!2sus!4v1699841021608!5m2!1sen!2sus" width ="90%" frameborder="0" allowfullscreen/>
        </div>

        <div class="subscribe">
        <form action="namo_narayanaya/src/configure/forms/contact.php" method="post" role="form" class="php-email-form">
        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
            
        <button type="submit">Subscribe</button>
        </form>
        </div>

      </div>
    </section>



        </>
)
}
}
export default Contactz;