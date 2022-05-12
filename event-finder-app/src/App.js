import ReadAPIData from './components/redux/containers/ReadAPIData';
import SendDataToAPI from './components/redux/containers/SendDataToAPI';

function App() {
  return (
    <div>
      <ReadAPIData/>
      <SendDataToAPI/>
    </div>
  );
}

export default App;