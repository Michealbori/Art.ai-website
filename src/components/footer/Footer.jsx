import '../footer/Footer.css';
import Developer from '../developer/Developer.jsx';


export default function Footer(){
    return <div className="FooterWrapper">
              <div className="footer">
                
                <div className="FooterUrl">
                    <img src="src/Accets/Art Logo.png" alt="" />
                    <span id='footerBreakepoint'>
                         <ul>
                        <li><a href="">Parents</a></li>
                        <li><a href="">Siblings</a></li>
                        <li><a href="">Trust & safety</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>  

                    <ul>
                        <li><a href=""><b>FAQ</b></a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href=""> Blogs</a></li>
                        <li><a href="">Contact 📲 </a></li>
                    </ul>
                    </span>
                   
  <section  id='footerBreakepoint'>
                        <ul>
                        <li><a href="">Order Tracking</a></li>
                        <li><a href="">Wholesale</a></li>
                        <li><a href=""> Shipping privacy</a></li>
                        <li><a href="">Corporate Gifting </a></li>
                    </ul>


                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">  Twitter</a></li>
                        <li><a href=""> Linkedin </a></li>
                    </ul>
  </section>


                </div>
              </div>
              <Developer />
    </div>
}