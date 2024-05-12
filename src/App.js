import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Subheader from './components/subheader/Subheader';
import Banner from './components/banner/Banner';
import Wrapper from './components/wrapper/Wrapper'
import Container from './components/container/Container';
import Box from './components/box/Box';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Subheader />
      <Navbar />
      <Main />
      <Banner />
      <Wrapper />
      <Container />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
