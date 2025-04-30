import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookShadow from './components/BookShadow.jsx';

function App() {
  return (
    <div className="relative min-h-screen max-h-screen flex flex-col z-0">
      
      {/* Always at the top */}
      <Header />

      {/* Background behind everything */}
      <BookShadow />

      {/* bookmark */}
      <img
        src="/assets/bookmark.png"
        className="
        // ALL_SCREENS: absolute -top-3 left-[50%] h-1/2 drop-shadow-lg shadow-black z-[9999] hidden
        // SM_SCREENS:
        // MD_SCREENS: md:hidden
        // LG_SCREENS: lg:block
        // XL_SCREENS: "
        alt="Bookmark"
      />

      {/* SCROLLABLE OUTLET area */}
      <div className="flex-1 relative z-10 overflow-y-auto">
        <Outlet />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
