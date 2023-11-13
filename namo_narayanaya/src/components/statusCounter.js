import React from "react";


class StatusCount extends React.Component{
render(){
    return(
        <>
        <section id="stats-counter" class="stats-counter">
<div class="container" data-aos="zoom-out">

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
        <p>History</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
        <p>Deities</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
        <p>Features</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
        <p>Lord Vishnu</p>
      </div>
    </div>

  </div>

</div>
</section>

</>
    )
  }
}
export default StatusCount;