import './App.css';
import Header from './components/Header/Header/Header';
import Banner from './components/Header/ContentHeader/Banner/Banner';
import ContentHeader from './components/Header/ContentHeader/Content/ContentHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ContentHeader />
    </div>
  );
}

export default App;
