import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Rating, Typography, useMediaQuery } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react'
// 地圖樣式
import { mapStyle } from '../../mapStyle'
import { MapContainer, MapPaper, MapPointer, MarkerContainer } from './styles'
// import Rating from '@mui/material';

const Marker = ({ matches, place }) => (
  <MarkerContainer>
    {!matches ? (
      <LocationOnOutlinedIcon color="primary" fontSize="large" />
    ) : (
      <MapPaper elevation={3}>
        <Typography variant="subtitle2" gutterBottom>
          {' '}
          {place.name}
        </Typography>
        <MapPointer
          src={
            place.photo
              ? place.photo.images.large.url
              : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          }
          alt=""
        />
        <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
      </MapPaper>
    )}
  </MarkerContainer>
)

function Map({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) {
  // 判斷是否為手機版
  const matches = useMediaQuery('(min-width:600px)')
  const [defaultCenter, setDefaultCenter] = useState(null)

  useEffect(() => {
    if (!defaultCenter) {
      setDefaultCenter(coords)
    }
  }, [defaultCenter, setDefaultCenter, coords])

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAJPIk77jV9MNH50lQswloxYwlDqtoiI8M' }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyle }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <Marker
              matches={matches}
              place={place}
              key={i}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            />
          ))}
      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
