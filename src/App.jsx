import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Checkbox {...label} defaultChecked />
       <Button variant="outlined" startIcon={<DeleteIcon />}>Delete </Button>
       
     
    </>
  )
}

export default App
