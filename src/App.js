import './App.css';
import Viewer from "./map/Viewer";


function App() {
	return (
		<div className="App">
			<Viewer center={[40.1, 45]} zoom={8}/>
		</div>
	);
}

export default App;
