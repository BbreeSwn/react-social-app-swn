import {Outlet} from 'react-router-dom'
import {Box} from '@mui/material'
import AppBar from '../component/AppBar'

export default function AppLayout (){
    return (
        <Box flexGrow={1}>
            <AppBar />
            <Outlet />
        </Box>
    );
}