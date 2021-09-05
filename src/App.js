import './App.css';
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <PrimaryAppBar></PrimaryAppBar>
    </div>
    </BrowserRouter>
  );
}

export default App;
