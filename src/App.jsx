import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookShadow from './components/BookShadow.jsx';
import bookMark from './assets/bookmark.png';

function App() {
  return (
    <div className="bg-yellow-200 relative min-h-dvh flex flex-col z-0">
      
      {/* Always at the top */}
      <Header/>

      {/* Background behind everything */}
      <BookShadow />

      {/* bookmark */}
      <img
        src={bookMark} alt="decorative bookmark"
        className="absolute -top-3 left-[50%] h-1/2 drop-shadow-lg shadow-black z-10 hidden
        md:hidden
        lg:block"/>
      
      <main className='pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]'>
        <Outlet/>
      </main>
      

      <Footer />
      
    </div>
  );
}

export default App;
