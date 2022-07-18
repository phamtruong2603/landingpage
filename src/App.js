import './App.css';
import Header from './components/Header/Header/Header';
import Banner from './components/Header/ContentHeader/Banner/Banner';
import ContentHeader from './components/Header/ContentHeader/Content/ContentHeader';
import GiftList from './components/Content/GiftList';
import Feedback from './components/Feedback/Feedback';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ContentHeader />
      <GiftList />
      <Feedback />
    </div>
  );
}

export default App;
