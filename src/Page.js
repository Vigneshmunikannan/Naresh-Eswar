import Gallary from "./Gallery";
import NavHead from './NavHead'
import Homepage from './Homepage'
import About from './About'
import Social from './SocialMedia'
import ContactPage from "./Contact";
function Page() {
    return (
      <div >
       <NavHead/>
      <Homepage/>
      <About/>
      <Social/> 
      {/* <Gallary/> */}
      <ContactPage/>
      </div>
    );
  }
  
  export default Page;
  