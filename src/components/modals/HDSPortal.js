import { createPortal } from "react-dom";

const HDSPortal = (props) => {

    const portalContainer = document.getElementById('container')
  
    if (!portalContainer) {
        throw new Error("unable to find the modal container")
    }
  
    return createPortal(props.children, portalContainer) 
  
  }

  export default HDSPortal;