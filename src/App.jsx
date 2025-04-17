import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookShadow from './components/BookShadow.jsx';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Header />

      {/* bookmark */}
      <img
        src="/assets/bookmark.png"
        className="
        // SMALLSCREENS/GENERAL absolute top-0 left-[50%] h-1/2 drop-shadow-lg shadow-black z-[1] hidden
        // MEDIUMSCREENS md:hidden
        // LARGESCREENS lg:block"
        alt="Bookmark"
      />

      {/* Main content area between header/footer */}
      <div className="flex-grow min-h-[75vh] relative">
        <Outlet />
      </div>

      <Footer />
      <BookShadow />
      <img src='assets/ripped-paper-white-2.png' 
        className="
        // GENERAL absolute -bottom-10 rotate-[-10deg] drop-shadow-sm
        // SMALLSCREENS hidden
        // MEDIUMSCREENS md:-right-20 md:w-[27rem] md:block
        // LARGESCREENS lg:-right-20 lg:-bottom-14 lg:w-[30rem] lg:block">
      </img>
    </div>
  );
}

export default App;
