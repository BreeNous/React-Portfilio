import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BookShadow from './components/BookShadow.jsx'


function App() {

  return(
    <div className="Base flex flex-col h-full bg-transparent">
      <Header/>
      <img src='/assets/bookmark.png' className='absolute left-[45.5rem] -top-1 drop-shadow-md z-[100]'></img>
      <div className="Outlet">
        <Outlet/>
      </div>
      <Footer/>
      <BookShadow/>
    </div>
  );
}

export default App
