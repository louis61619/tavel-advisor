import { Chip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

// export default makeStyles(() => ({
//   chip: {
//     margin: '5px 5px 5px 0',
//   },
//   subtitle: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
//   },
//   spacing: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//   },
// }));

export const PlaceChip = styled(Chip)(() => ({
  margin: '5px 5px 5px 0',
}))

export const SubTitle = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
}))

export const Spacing = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
