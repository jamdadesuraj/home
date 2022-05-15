import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
<footer class="footer">
        <div class="row">
            <div class="col-sm-6 col-md-4 footer-navigation">
                <h3><a href="#">Home<span>Interior</span></a></h3>
                <p class="links"><a href="#">Services</a><strong> &middot; </strong><a href="#">About</a><strong> &middot; </strong><a href="#">Expertise</a><strong> &middot; </strong><a href="#">Reviews</a><strong> &middot; </strong><a href="#">Contact</a></p>
                <p class="company-name">homeInterior.COM &copy; 2022</p>
            </div>
            <div class="col-sm-6 col-md-4 footer-contacts">
                <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                    <p><span class="new-line-span">21 Revolution Street</span>NY, USA</p>
                </div>
                <div><i class="fa fa-phone footer-contacts-icon"></i>
                    <p class="footer-center-info email text-left"> +1 987654321</p>
                </div>
                <div><i class="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="#" target="_blank">support@homeinterior.com</a></p>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-4 footer-about">
                <h4>About the company</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer