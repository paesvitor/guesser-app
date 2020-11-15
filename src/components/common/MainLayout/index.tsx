import { Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface MainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: MainLayoutProps) {
    const { children } = props;
    const classes = useStyles();

    return <Container id="__main" className={classes.root}>
        {children}
    </Container>
}

export default MainLayout