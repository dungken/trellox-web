import { pink } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home'

function App() {
  return (
    <>
      <div>dungken</div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
