import { useState } from 'react';
import SideNavbar from '@/components/SideNavbar';
import Map from '../components/Map';
import '@here/hds-base/build/hds-styles.css';
import '@here/hds-grid/build/hds-grid.css';
import '@here/hds-iconlibrary/build/hds-iconlibrary-8px.css';
import '@here/hds-iconlibrary/build/hds-iconlibrary-16px.css';
import '@here/hds-iconlibrary/build/hds-iconlibrary-24px.css';
import ModalButtons from '@/components/ModalButtons';
import Seo from '@/components/modals/Seo';


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <Seo/>
    <div className="container">
      <main className="main">
        <div className="mapbox">
          <div className={`countrySelectBox ${isSidebarOpen ? 'open' : ''}`}>
            <SideNavbar />
          </div>
          <ModalButtons/>
          <Map />
         
          {/* code to show hamburger menu or the cross menu */}
           <button className={`hamburger ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </div>
      </main>
    </div>
    </>
  );
}
