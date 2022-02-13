import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Box } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import { HeaderInputBase, HeaderTypography, HeaderToolbar, Search, IconWrapper } from './styles'
// import second from '@'

function Header({ onLoad, onPlaceChanged }) {
  return (
    <AppBar position="static">
      <HeaderToolbar>
        <HeaderTypography variant="h5">Travel Advisor</HeaderTypography>
        <Box display="flex">
          <HeaderTypography variant="h6">Explore new places</HeaderTypography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
              <HeaderInputBase placeholder="Search…" />
            </Search>
          </Autocomplete>
        </Box>
      </HeaderToolbar>
    </AppBar>
  )
}

export default Header
