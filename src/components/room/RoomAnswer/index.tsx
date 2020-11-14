import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Marker from '../../common/Marker';
import { useStyles } from './styles'

function RoomAnswer() {
    const classes = useStyles();

    return <section className={classes.root}>
        <Box mb={2}>
            <Typography variant="h3">
                Categoria
        </Typography>
        </Box>

        <Box mb={2}>
            <Marker>
                Nomes do Brasil
            </Marker>
        </Box>

        <Box mb={2}>
            <Typography variant="h3">
                Pergunta
            </Typography>
        </Box>

        <Box mb={3}>
            <Marker>
                Quantas pessoas se chamam LUCAS?
            </Marker>
        </Box>

        <Box mb={3}>
            <TextField type="number" fullWidth variant="outlined" />
        </Box>


        <Button fullWidth variant="contained" color="primary">
            Enviar palpite
        </Button>
    </section>
}

export default RoomAnswer