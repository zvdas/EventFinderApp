// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PageDefault from './event-module/components/page-default';

function App() {
  return (
    <div className='container'>
      <div className='logoarea d-flex justify-content-center'>
        <h1 className='bg-secondary bg-gradient'>Wazzup Event Horizon</h1>
      </div>
      <p className='text-center text-white bg-dark my-1'>
        Click <a className='text-white' href='https://zvdas.github.io'><u><strong>here</strong></u></a> to go to portfolio website
      </p>
      <PageDefault/>
    </div>
    /*  
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
