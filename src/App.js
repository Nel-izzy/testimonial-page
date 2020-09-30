import React from "react";
import logo from "./logo.png"
import image1 from "./Testimonial-image1.png"
import image2 from "./image2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"
import img7 from "./img7.png"
import img9 from "./img9.png"
import img8 from "./img8.png"
import img10 from "./img10.png"
import img11 from "./img11.png"
import img12 from "./img12.png"
import img13 from "./img13.png"
import img14 from "./img14.png"
import img15 from "./img15.png"


import "./App.css"


function App() {
  return <div className="container">
      <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src={logo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    
    
  </div>
  <ul class="navbar-nav mr-auto justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">STORIES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn" href="#">LOGIN</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-warning text-white" href="#">SIGN UP</a>
      </li>
    </ul>
</nav>

  <ul className="header2" >
  <li class="dsp">
        <a  href="#" >MARKET PLACE</a>
      </li>
      <li class="dsp">
        <a  href="#" >WHOLESALE CENTER</a>
      </li>
      <li class="dsp">
        <a  href="#">SELLER CENTER</a>
      </li>
      <li class="dsp">
        <a  href="#">SERVICES</a>
      </li>
      <li class="dsp">
        <a href="#">INTERSHIPS</a>
      </li>
      <li class="dsp">
        <a href="#">EVENTS</a>
      </li>
  </ul>
  

<div class="row">

<div class="col-md-6" >
  <h1 style={{marginTop: "5rem", }}>Amazing <br/>Customer experience from our wonderful customers</h1>
  <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
</div>

<div class="col-md-6">
 <img src={image1} class="img-fluid rounded" style ={{marginLeft:"4rem"}}/>
</div>
</div>

<div className="row bg-dark">
<div className="col-lg-6">
<img src={image2} class="img-fluid rounded"/>
</div>
<div className="col-lg-6">
<h4 className="mt-4 text-white">Tolu & Joy Experience</h4>
<p className="text-white">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, 
  very good customer service, an all round great experience. I would definately be coming back!</p>
  <p id="share-story" className="text-white">Share your own story</p>
</div>
</div>

<div className="row">
<div className="col-lg-4">

<div class="card">
  <img src={img3} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Joseph Ike</h5>
  <p className="card-subtitle">In Ikeja <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
    Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim..</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img4} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Adetola Fashina</h5>
  <p className="card-subtitle">Ibadan <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img5} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Emmanuel Fayemi</h5>
  <p className="card-subtitle">In Akoka <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

</div>
<div className="row">
<div className="col-lg-4">

<div class="card">
  <img src={img6} class="card-img-top" alt="..." style={{display:"flex", alignSelf:"center"}}/>
  <div class="card-body">
  
  <h5 className="card-title">Chisom Obilor</h5>
  <p className="card-subtitle">In Magodo <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img7} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Adenoluwa Fayemi</h5>
  <p className="card-subtitle">Iwo Road <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  
  <img src={img8} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Chidi Okeke</h5>
  <p className="card-subtitle">In Somolu <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

</div>

<div className="row">
  <div className="col-lg-6">
  <h4 style={{marginTop: "5rem", }}> Josiah Experience</h4>
  <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usabi
    the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
  </div>
  <div className="col-lg-6">
     <img  src={img9}  style={{height:"90%", width:"90%"}}/>
  </div>
</div>

<div className="row">
<div className="col-lg-4">

<div class="card">
  <img src={img10} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Joseph Ike</h5>
  <p className="card-subtitle">In Ikeja <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
    Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim..</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img11} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Adetola Fashina</h5>
  <p className="card-subtitle">Ibadan <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img12} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Emmanuel Fayemi</h5>
  <p className="card-subtitle">In Akoka <span style={{marginLeft:"10px"}}> Customer </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

</div>
<div className="row">
<div className="col-lg-4">

<div class="card">
  <img src={img13} class="card-img-top" alt="..." style={{display:"flex", alignSelf:"center"}}/>
  <div class="card-body">
  
  <h5 className="card-title">Chisom Obilor</h5>
  <p className="card-subtitle">In Magodo <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  <img src={img14} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Adenoluwa Fayemi</h5>
  <p className="card-subtitle">Iwo Road <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

<div className="col-lg-4">

<div class="card">
  
  <img src={img15} class="card-img-top" alt="..." />
  <div class="card-body">
  <h5 className="card-title">Chidi Okeke</h5>
  <p className="card-subtitle">In Somolu <span style={{marginLeft:"10px"}}> Vendor </span></p>
    <p class="card-text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
  </div>
</div>

</div>

</div>
  </div>
 
}
export default App;
