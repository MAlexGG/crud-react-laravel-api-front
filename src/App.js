import './styles/App.scss';
import Home from './components/home';
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true; 

function App() {
    return (
        <div className = "App" >
            <header className = "App-header" >
                <Home />
            </header>
        </div>
    );
}

export default App;