import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BookShadow from './components/BookShadow.jsx'

function App() {

  return(
    <div className="Base flex flex-col bg-transparent">
      <Header/>
      <div className="Outlet">
        <Outlet/>
      </div>
      <Footer/>
      <BookShadow/>
    </div>
  );
}

export default App
