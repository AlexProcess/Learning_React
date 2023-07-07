import { Box } from '@mui/material'

export const JournalLayout = ({children}) => {
  const drawerWith = 240
  
  return (
    <Box sx={{display: 'flex'}}>
        {/* NAVBAR */}

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
