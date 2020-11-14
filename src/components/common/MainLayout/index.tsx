import { Box, Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import { useStyles } from './styles';

interface MainLayoutProps {
    children: React.ReactNode,
    navbar?: boolean
}

function MainLayout(props: MainLayoutProps) {
    const { children, navbar = true } = props;
    const classes = useStyles();

    return <Container id="__main" className={classes.root}>
        {navbar && <Box mt={2}>
            <Navbar />
        </Box>}

        {children}
    </Container>
}

export default MainLayout