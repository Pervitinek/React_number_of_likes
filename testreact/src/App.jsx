import './App.css';
import {Cards} from "./components/Cards.jsx";

export function App() {

    let favNum = 0;

    return (
        <>
            <div>{favNum}</div>
            <Cards onClick/>
            <Cards/>
        </>
    )
}



export default App;