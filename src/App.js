import './App.css';
import 'leaflet/dist/leaflet.css';
import {LayersControl, MapContainer, TileLayer} from "react-leaflet";


function App() {
	const center = [40.1, 45];
	const zoom = 8;
	return (
		<div className="App">
			<MapContainer center={center} zoom={zoom}>
				<LayersControl position="topright">
					<LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
						<TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Google Streets ">
						<TileLayer url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" subdomains={['mt0','mt1','mt2','mt3']}/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Hybrid">
						<TileLayer url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" subdomains={['mt0','mt1','mt2','mt3']}/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Satellite">
						<TileLayer url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={['mt0','mt1','mt2','mt3']}/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Terrain">
						<TileLayer url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" subdomains={['mt0','mt1','mt2','mt3']}/>
					</LayersControl.BaseLayer>
				</LayersControl>
			</MapContainer>,
		</div>
	);
}

export default App;
