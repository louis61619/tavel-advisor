import { FormControl, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

// export default makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   loading: {
//     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//   },
//   container: {
//     padding: '25px',
//   },
//   marginBottom: {
//     marginBottom: '30px',
//   },
//   list: {
//     height: '75vh', overflow: 'auto',
//   },
// }));

// 第二種寫法
export const ListContainer = styled('div')`
  & {
    padding: 25px;
  }
`
export const Loading = styled('div')`
  & {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ListFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
}))

export const ListGrid = styled(Grid)(() => ({
  height: '75vh',
  overflow: 'auto',
}))
