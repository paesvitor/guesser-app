import { Container } from '@material-ui/core';
import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: MainLayoutProps) {
    const { children } = props

    return <Container id="__main">
        {children}
    </Container>
}

export default MainLayout