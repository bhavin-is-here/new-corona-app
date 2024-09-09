import {
    HDSButton,
    HDSIcon,
    HDSLauncher,
    HDSList,
    HDSListItem,
    HDSTextarea,
  } from "@here/hds-react-components";
//   import "./About.css";
  
  const AboutModals = ({ onChange }) => {
    const SubTitle = () => {
      return (
        <>
        <div className="share-container">
            <div className="twitter share-box">

            </div>
            <div className="facebook share-box">
                
            </div>
            <div className="linkedin share-box">

            </div>
            <div className="Email share-box">
                
            </div>
        </div>
         
        </>
      );
    };
  
    return (
      <>
        <div className="modal">
          <HDSLauncher
            onClose={() => onChange({ value: false })}
            variant={"subtle"}
            title={
              <>
                <p>Share this page</p>
              </>
            }
            main={
              <>
                <HDSList variant="subtle" size="auto">
                  <HDSListItem>
                    <SubTitle />{" "}
                  </HDSListItem>
                </HDSList>
              </>
            }
          ></HDSLauncher>
        </div>
      </>
    );
  };
  
  export default AboutModals;
  