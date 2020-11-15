import { Box, Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from '../../../utils/hooks/useSelector';
import Navbar from '../Navbar';
import { useStyles } from './styles';

interface MainLayoutProps {
    children: React.ReactNode,
    navbar?: boolean
}

function MainLayout(props: MainLayoutProps) {
    const { children, navbar = true } = props;
    const uiStoreState = useSelector(state => state.ui);
    const { backgroundColor, backgroundImage } = uiStoreState;

    console.log(backgroundColor)

    const classes = useStyles({ backgroundColor });

    return <section className={classes.root} style={{ backgroundImage: `url("/patterns/${backgroundImage}.svg")` }}>
        <Container id="__main" className={classes.container}>

            {children}
            {navbar && <Box my={2}>
                <Navbar />
            </Box>}
        </Container>
    </section>
}

export default MainLayout