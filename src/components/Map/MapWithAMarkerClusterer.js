import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { MarkerClusterer } from  'react-google-maps/lib/components/addons/MarkerClusterer';
import { connect } from 'react-redux'
import { setModal } from '../../tools/actions'

const MapWithAMarkerClusterer = compose(
  withStateHandlers(() => ({
   isOpen: false,
 }),
  {
    onToggleOpen: ({isOpen}) => () => ({
      isOpen: !isOpen
    }),
    showInfo: ({isOpen}) => (i) => ({
      isOpen: true, 
      showInfoIndex: i
    })
  }),
  withProps({
    isMarkerShown: true,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAVr5FG_sBx3vU0seFGE7wiSRIN9JHwY1k",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    ref={props.onMapMounted}
    onIdle={props.handleMapChanged}
    defaultZoom={13}
    defaultCenter={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng  }}
  >
    <MarkerClusterer
  onClick={props.onMarkerClustererClick}
  averageCenter
  enableRetinaIcons
  gridSize={60}
  >
  {props.markers.map((marker, i) => (
    <Marker
    onClick={() => {props.showInfo(marker.id )}}
    key={marker.id}
    position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
    icon= {(marker.category === 'service') ? { url: 'http://maps.google.com/mapfiles/kml/pal5/icon6.png' } : { url: 'http://maps.google.com/mapfiles/kml/pal4/icon28.png' }}
    >
    { props.showInfoIndex === marker.id && props.isOpen
      && <InfoWindow onCloseClick={() => props.onToggleOpen()} 
      >
    <div>
    <h5>{ marker.title }</h5>
    <div className="mb-2">
      <span className="font-weight-bold text-dark mr-1"> { marker.location }</span>
      <span className="text-muted mr-1"> { marker.status }</span>
      <span className=""> {(marker.category === 'service') ? <span className="text-service px-1 rounded">Service</span> : <span className="text-material px-1 rounded">Material</span>}</span> 
    </div>
    <div className="text-primary mb-2">{marker.description}</div>
    <button onClick={() => props.setModal({open: true, type: 'conv', data: marker})} className="btn btn-primary mb-1" data-toggle="modal" data-target="#poppedModal">Offer to help</button>
    </div>
    </InfoWindow>}
    </Marker>
    ))}
  </MarkerClusterer>
  </GoogleMap>
);

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) },
  }
}


export default connect(null, mapDispatchToProps)(MapWithAMarkerClusterer)

