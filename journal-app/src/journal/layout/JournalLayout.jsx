import { Box } from '@mui/material'
import { NavBar } from '../components'

export const JournalLayout = ({children}) => {
  const drawerWith = 240
  
  return (
    <Box sx={{display: 'flex'}}>
        <NavBar drawerWith={drawerWith}/>

        {/* SIDEBAR */}
        <Box 
        component="main"
        sx={{flexGrow: 1, p: 3}}>
            {/* Toolbar */}
            {children}
        </Box>
    </Box>
  )
}
