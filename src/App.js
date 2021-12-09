import './App.css';
import React from "react";
import ViewerSidebar from "./sidebar/ViewerSidebar";

class App extends React.Component {

	render() {
		return (
			<ViewerSidebar/>
			// <div className="App">
			// 	<Viewer center={[40.1, 45]} zoom={8}/>
			// </div>
		);
	}
}

export default App;
