import { Box, Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from '@material-ui/core';
import React from 'react';

interface AppButtonProps extends MuiButtonProps {
    loading?: boolean;
}

function Button(props: AppButtonProps) {
    const { loading, children, ...rest } = props;

    return <MuiButton {...rest}>
        {loading ? <Box width="100%" pt={1}>
            <CircularProgress size={24} color="secondary" />
        </Box> : children}
    </MuiButton>
}

export { Button }