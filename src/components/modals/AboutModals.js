import {
    HDSButton,
    HDSIcon,
    HDSLauncher,
    HDSList,
    HDSListItem,
    HDSTextarea,
} from "@here/hds-react-components";
import '@here/hds-components/iconlibrary/hds-iconlibrary-third-party-logos-8px.css';
import '@here/hds-components/iconlibrary/hds-iconlibrary-third-party-logos-16px.css';
import '@here/hds-components/iconlibrary/hds-iconlibrary-third-party-logos-24px.css';


const AboutModals = ({ onChange }) => {
    const SubTitle = () => {
        return (
            <>
                <div className="share-container">

                    <div className="twitter share-box">
                        <div className="icons-box">
                            <hds-icon name="twitter" category="third-party-logos" icon-style="outline" size="34px"></hds-icon>
                            <p>Twitter</p>
                        </div>
                    </div>
                    <div className="facebook share-box">
                        <div className="icons-box">

                            <hds-icon name="facebook" category="third-party-logos" icon-style="outline" size="34px"></hds-icon>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="linkedin share-box">
                        <div className="icons-box">

                            <hds-icon name="linkedin" category="third-party-logos" icon-style="outline" size="34px"></hds-icon>
                            <p>linkedin</p>
                        </div>
                    </div>
                    <div className="Email share-box">
                        <div className="icons-box">

                            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16v16H4z" />
                                <path d="M22,6l-10,7L2,6" />
                            </svg>
                            <p>Email</p>
                        </div>
                    </div>
                </div>

            </>
        );
    };
    const CTAButton = () => {
        return (
            <>
                <HDSList style={{ marginTop: "4rem" }}>
                    <HDSListItem size="extra-large"></HDSListItem>

                    <a
                        href="https://www.here.com/ev-index-2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <HDSButton
                            variant="primary"
                            type="button"
                            size="large"
                            width="100%"
                            icon="car-charging-fast"
                            iconCategory="poi"
                        >
                            Explore this year’s EV Index
                        </HDSButton>
                    </a>
                    <HDSListItem size="extra-large">
                        <h4></h4>
                    </HDSListItem>
                </HDSList>
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
                            <p className="share-title">Share this page</p>
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
