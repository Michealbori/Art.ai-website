import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/Navbar.css';
import 'animate.css';
import { motion } from "framer-motion";



export default function Header() {



  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className='animate__animated animate__bounceInUp' src="src/Accets/Art Logo.png" alt="Art.ai LOGO" /></Navbar.Brand>
           <Navbar.Toggle src="src/Accets/menuToggle.png" />       
        {/* <img src="src/Accets/menuToggle.png" alt="menuToggle LOGO" /> */}
         {/* <Navbar.Toggle /> */}
        <Navbar.Collapse id="responsive-navbar-nav">

            {/* Center */}

          <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#features" id='navDesign'> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            >New Features</motion.b></Nav.Link>
            <Nav.Link href="#pricing" id='navDesign'> <motion.b
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{delay: 1.5, duration: 1}}
            >Ai Poster</motion.b>
             <motion.sup
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{delay: 1.5, duration: 1}}
            >New</motion.sup></Nav.Link>
          </Nav>

           {/* Flex End */}
           
          <Nav>
            <Nav.Link href="#deets" id='navDesign'> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            >Home</motion.b></Nav.Link>
            <Nav.Link href="#deets"> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            >About Us</motion.b></Nav.Link>
            <Nav.Link href="#deets"> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            >Blogs</motion.b></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               <motion.b
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{delay: 1.5, duration: 1}}
               >Cart</motion.b> <motion.sup
               initial={{ opacity: 0}}
               animate={{ opacity: 1}}
               transition={{delay: 1.5, duration: 1}}
               >2</motion.sup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




