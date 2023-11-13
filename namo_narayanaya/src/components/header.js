import React from "react";


class Header extends React.Component{
render(){
    return(
        <>
          <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
     
        <img src="namo_narayanaya/src/configure/assets/img/logo.png" alt="" />
        
        <h5><span>Sri Prasanna Venkatachalapathy Perumal</span></h5>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#chefs">Trust</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li class="dropdown"><a href="#"><span>Category</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Category 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Category</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Category 1</a></li>
                  <li><a href="#">Deep Category 2</a></li>
                  <li><a href="#">Deep Category 3</a></li>
                  <li><a href="#">Deep Category 4</a></li>
                  <li><a href="#">Deep Category 5</a></li>
                </ul>
              </li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
              <li><a href="#">Category 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a class="btn-book-a-table" href="#book-a-table">Tickets Booking</a>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
        </>
    )
  }
}
export default Header;