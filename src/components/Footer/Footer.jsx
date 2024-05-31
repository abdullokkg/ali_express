import "./Footer.scss"
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiInformation2Fill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h1>Buy</h1>
          <br />
          <ul>
            <li>Registration</li>
            <li>eBay Money Back Guarantee</li>
            <li>Bidding & buying help</li>
            <li>Stores</li>
            <li>eBay for Charity</li>
            <li>Charity Shop</li>
            <li>Seasonal Sales and events</li>
          </ul>
        </div>
        <div>
          <h1>Sell</h1>
          <br />
          <ul>
            <li>Start selling</li>
            <li>How to sell</li>
            <li>Business sellers</li>
            <li>Affiliates</li>
          </ul>
          <br />
          <h1>Tools & apps</h1>
          <br />
          <ul>
            <li>Developers</li>
            <li>Security center</li>
            <li>Site map</li>
          </ul>
        </div>
        <div>
          <h1>Stay connected</h1>
          <br />
          <ul>
            <li className="icon_item"><IoLogoFacebook />Facebook</li>
            <li className="icon_item"><FaTwitterSquare />Twitter</li>
          </ul>
        </div>
        <div>
          <h1>About eBay</h1>
          <br />
          <ul>
            <li>Company info</li>
            <li>News</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Diversity & Inclusion</li>
            <li>Global Impact</li>
            <li>Government relations</li>
            <li>Advertise with us</li>
            <li>Policies</li>
            <li>Verified Rights Owner (VeRO) Program</li>
            <li>eCI Licenses</li>
          </ul>
        </div>
        <div>
          <h1>Help & Contact</h1>
          <br />
          <ul>
            <li>Seller Center</li>
            <li>Contact Us</li>
            <li>eBay Returns</li>
          </ul>
          <br />
          <h1>Community</h1>
          <br />
          <ul>
            <li>Announcements</li>
            <li>eBay Community</li>
            <li>eBay for Business Podcast</li>
          </ul>
          <br />
          <h1>eBay Sites</h1>
        </div>
      </div>
      <div className="txt_footer">
        <strong>Copyright © 1995-2024 eBay Inc. All Rights Reserved.</strong>
        <ul>
          <ul>
            <li><Link to={"/"}>Accessibility</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>User Agreement</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>Privacy</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>Payments Terms of Use</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>Cookies</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>CA Privacy Notice</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li><Link to={"/"}>Your Privacy Choices</Link></li>
            <li>,</li>
          </ul>
          <ul>
            <li>and</li>
            <li><Link to={"/"}>AdChoice</Link></li>
            <li className="txt_footer_icon"><RiInformation2Fill /></li>
          </ul>
        </ul>
      </div>
    </>
  )
}

export default Footer