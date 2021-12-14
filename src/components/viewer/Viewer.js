import 'leaflet/dist/leaflet.css';
import React from "react";
import { LayersControl, MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import { OWS_URL } from '../../features/geoserver/geoserverAPI';
import './Viewer.css';

const mapConfigs = [
	{ key: 1, name: 'OpenStreetMap.Mapnik', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', checked: true },
	{ key: 2, name: 'OpenStreetMap.BlackAndWhite', url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png' },
	{ key: 3, name: 'Google Streets', url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] },
	{ key: 4, name: 'Hybrid', url: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] },
	{ key: 5, name: 'Satellite', url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] },
	{ key: 6, name: 'Terrain', url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }
]

export default function Viewer(props) {
	return (
		<div className="Viewer">
			<MapContainer center={props.center} zoom={props.zoom}>
				<LayersControl position="topright">
					{mapConfigs.map(config => {
						return (
							(<LayersControl.BaseLayer {...config}>
								{
									props.product === undefined
										? <TileLayer {...config} />
										: <WMSTileLayer key={props.product.id} layers={props.product.layer} url={OWS_URL} />
								}
							</LayersControl.BaseLayer>)
						)
					})}
				</LayersControl>
			</MapContainer>
		</div >
	);
}