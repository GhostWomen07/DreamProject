import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import "./styles.scss"

const MapView = () => {
    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow 
    });

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default MapView;