import React from 'react';
import "./Newsletter.css";
import Img_6 from '../../assets/img/img-6.png'

function Newsletter() {
  return (
    <div class="newsletter_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="imgage_6"><img src={Img_6} /></div>
               </div>
               <div class="col-md-6">
                  <h1 class="newsletter_taital">Subscribe Newsletter</h1>
                  <input type="text" class="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                  <div class="subscribe_bt"><a href="#">Subscribe Now</a></div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Newsletter
