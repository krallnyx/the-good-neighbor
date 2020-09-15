import React from 'react'
import MapWithAMarkerClusterer from './MapWithAMarkerClusterer'
import { connect } from 'react-redux'
import { setMapRequest } from '../../tools/actions'


class Map extends React.PureComponent {

  handleMapChanged = () => {
    this.getMapBounds()
  }

  handleMapMounted = (map) => {
    this.map = map
  }

  getMapBounds = () => {
    let NELat = this.map.getBounds().getNorthEast().lat()
    let NELng = this.map.getBounds().getNorthEast().lng()
    let SWLat = this.map.getBounds().getSouthWest().lat()
    let SWLng = this.map.getBounds().getSouthWest().lng()

    this.props.getMapRequest({ 
      northEastLng: NELng,
      southWestLng: SWLng,
      northEastLat: NELat,
      southWestLat: SWLat,
    })
  }

  render(props) {
    if (this.props.currentLocation) {
      return (
        <MapWithAMarkerClusterer
        onMapMounted={this.handleMapMounted.bind(this)} 
        handleMapChanged={this.handleMapChanged.bind(this)} 
        currentPosition={this.props.currentLocation} 
        markers={this.props.requests}/>
        )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMapRequest: (coordinates) => { dispatch(setMapRequest(coordinates)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)