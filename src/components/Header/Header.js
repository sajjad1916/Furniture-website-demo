import React from 'react';
import logo from '../../assets/img/logo.png';
import SearchIcon from '../../assets/img/search-icon.png';
import UserIcon from '../../assets/img/user-icon.png'
import './Header.css';

function Header() {
  return (
   <div class="header_section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
         <a class="logo" href="index.html"><img src={logo} /></a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                  <a class="nav-link" href="index.html">Home</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="design.html">Our Design</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="shop.html">Shop</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact Us</a>
               </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <div class="search_icon">
                  <ul>
                          <li><a href="#"><img src={SearchIcon} /></a></li>
                     {/* <li><a href="#"><img className="" src={UserIcon} /></a></li> */}
                  </ul>
               </div>
            </form>
            </div>
            
            </div>
        </nav>
        </div>
  )
}

export default Header
