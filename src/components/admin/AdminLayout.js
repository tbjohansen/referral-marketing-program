import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { colors } from '../../assets/utils/colors';
import TopBar from './TopBar';
import SideBar from './Sidebar';

const DrawerHeader = styled(Box)(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const AdminLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                bottom: '100%',
                right: 0,
                left: 0,
            }}
            className="pt-8 w-screen md:w-full"
        >
            {/* ############### topbar ############### */}
            <TopBar
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />

            {/* ############### sidebar ###############*/}
            <SideBar mobileOpen={mobileOpen} />

            {/* ############### content ###############*/}
            <Box component="main" sx={{ bgcolor: colors.bgColor1, flexGrow: 1 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};

export default AdminLayout;
