import React from "react";


class MenuSection extends React.Component{
render(){
    return(
        <>
<section id="menu" class="menu">
<div class="container" data-aos="fade-up">

  <div class="section-header">
    <p>Check Our <span>Anna Prasadam Menu</span></p>
  </div>

  <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

    <li class="nav-item">
      <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
        <h4>Starters</h4>
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
        <h4>Breakfast</h4>
      </a>
    </li>  

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
        <h4>Lunch</h4>
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
        <h4>Dinner</h4>
      </a>
    </li>

  </ul>

  <div class="tab-content" data-aos="fade-up" data-aos-delay="300">

    <div class="tab-pane fade active show" id="menu-starters">

      <div class="tab-header text-center">
        <h3>Anna Prasadam Donations</h3>
      </div>

      <div class="row gy-5">

        <div class="col-lg-4 menu-item">
         
          <h4>Donation-1</h4>
          <p class="ingredients">
          Premium Anna prasadam donation with pay slip
          pre-register for booking amount : ₹1200
          </p>
          <p class="price">
          ₹18000
          </p>
        </div>

        <div class="col-lg-4 menu-item">
        
          <h4>Donation-2</h4>
          <p class="ingredients">
          Elite anna prasadam donations with pay slip
          </p>
          <p class="price">
          ₹500 - ₹1000
          </p>
        </div>

        <div class="col-lg-4 menu-item">
         
          <h4>Donation-3</h4>
          <p class="ingredients">
          Normal anna prasadam donations with pay slip
          </p>
          <p class="price">
          ₹5 - ₹50
          </p>
        </div>

      </div>
    </div>

  </div>

  <span>The temple is given daily alms. Sponsors for this Rs. 1200/- can be paid and receipt received at the office. And command investment of Rs. 18000/- can be paid into the alms fund and its interest can be alms on the day of birthday, wedding anniversary or any special day of the orderer's choice. Sponsors for these are welcome.
Those who wish to donate can pay their minimum donation at the ticket sales hall of the temple and get the donation receipt. As per Hindu Religious Endowment Commissioner's Permit M.M.No.53727 /04 H.3 dated 18.08.2004, the Annadana Donation Slips of Rs. 5, 10, 25, 50, 100, 500, 1000 are printed and donations are collected.
80G (2 ) (a ) (V ) C for grant of subsidy to charity scheme. No : 6162E (123 ) CIT - 1 / Try / 2002 - 2003 is exempted from income tax.</span>

</div>
</section>

</>
    )
  }
}
export default MenuSection;