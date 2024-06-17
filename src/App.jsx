import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return(
    <div className="Base flex flex-col bg-amber-50">
      <Header/>
      <div className="Outlet">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
