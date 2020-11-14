import { Box, Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from '@material-ui/core';
import React from 'react';

interface AppButtonProps extends MuiButtonProps {
    loading?: boolean;
}

function Button(props: AppButtonProps) {
    return <MuiButton {...props}>
        {props.loading ? <Box width="100%" pt={1}>
            <CircularProgress size={24} color="secondary" />
        </Box> : props.children}
    </MuiButton>
}

export { Button }