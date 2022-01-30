import logo from './logo.svg';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
    return (
        <div className="App">
            <Header title="My Todos List" searchBar={true}/>
            <Todos/>
            <Footer/>
        </div>
    );
}

export default App;