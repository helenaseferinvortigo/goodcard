import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import api from '../../Services/Api';

export class MapContainer extends Component {

    
	state = {
		estabelecimentos: []
	}

	componentDidMount(){
		this.loadEstabelecimentos();
	}

	loadEstabelecimentos = async () => {
		const response = await api.get('/estabelecimentos.json');
        console.log(response);
		this.setState({ estabelecimentos: response.data.docs});
    };
    
    

    constructor(props) {
        super(props);

        this.state = {
            details: [
                { lat: -30.0266893, lng: -51.191949 },
                { latitude: -30.359423, longitude: -51.021071 },
                { latitude: -30.205988, longitude: -51.08496 },
                { latitude: -30.6307081, longitude: -51.1434325 },
                { latitude: -30.3084488, longitude: -51.2140121 },
                { latitude: -30.5524695, longitude: -51.0425407 }
            ]
        };
    }

    displayMarkers = () => {
        return this.state.details.map((details, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: details.latitude,
                        lng: details.longitude
                    }}
                    onClick={() => console.log("You clicked me!")}
                />
            );
        });
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCK-VFzaYkBeheSjQn3SyZ9eqXdJxo07Jg"
})(MapContainer);