import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <>
    <section className='contactSection'>
   
    <div class="wrapper">
    <form action="#">
        <div class="h3 font-weight-bold text-center mb-3">Contact us</div>
        <div class="form-group d-flex align-items-center">
            <div class="icon"><span class="far fa-user"></span></div>
            <input autocomplete="off" type="text" class="form-control" placeholder="Name"/>
        </div>
        <div class="form-group d-flex align-items-center">
            <div class="icon"><span class="far fa-envelope"></span></div>
            <input autocomplete="off" type="email" class="form-control" placeholder="Email"/>
        </div>
        <div class="form-group d-flex align-items-center">
            <div class="icon"><span class="fas fa-phone"></span></div>
            <input autocomplete="off" type="tel" class="form-control" placeholder="Phone"/>
        </div>
        <div class="form-group d-flex align-items-center">
            <div class="icon"><span class="fas fa-map-marker-alt"></span></div>
            <input autocomplete="off" type="text" class="form-control" placeholder="City"/>
        </div>
        <div class="form-group d-flex align-items-center">
            <div class="icon"><span class="fas fa-key"></span></div>
            <input autocomplete="off" type="password" class="form-control" placeholder="Password"/>
            <div class="icon btn"><span class="fas fa-eye-slash"></span></div>
        </div>
        <div class="mb-2">
            <label class="option">Remember me
                <input type="checkbox" checked/>
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="btn btn-primary mb-3">Send</div>
        <div class="terms mb-2">
            By clicking "Send", you acknowledge that you have read the
            <a href="#">Privacy Policy</a> and agree to the
            <a href="#">Terms of Service</a>.
        </div>
        <div class="connect border-bottom mt-4 mb-4"></div>
        <ul class="p-0 social-links">
            <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
            <li><a href="#"><span class="fab fa-google"></span></a></li>
            <li><a href="#"><span class="fab fa-github"></span></a></li>
        </ul>
    </form>
</div>
</section>
    </>
  )
}

export default Contact