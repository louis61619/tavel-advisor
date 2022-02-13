import { CircularProgress, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { createRef, useEffect, useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { ListContainer, ListFormControl, ListGrid, Loading } from './styles'

function List({ places, type, setType, rating, setRating, childClicked, isLoading }) {
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    // 獲取到每個 item 的 dom 元素
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef()),
    )
  }, [places])

  return (
    <ListContainer>
      <Typography variant="h4">Food & Dining around you</Typography>
      {isLoading ? (
        <Loading>
          <CircularProgress size="5rem" />
        </Loading>
      ) : (
        <>
          <ListFormControl variant="standard">
            <InputLabel id="type">Type</InputLabel>
            <Select disabled id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </ListFormControl>
          <ListFormControl variant="standard">
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </ListFormControl>
          <ListGrid container spacing={3}>
            {elRefs.length === places.length &&
              places?.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
              ))}
          </ListGrid>
        </>
      )}
    </ListContainer>
  )
}

export default List
