import { Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Marker from '../../common/Marker';
import { useStyles } from './styles';
import { useSnackbar } from 'notistack';

function RoomAnswer() {
    const classes = useStyles();
    const [answer, setAnswer] = useState('');
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    function handleSetAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    function handleSubmitAnswer(e: React.FormEvent) {
        e.preventDefault();
        if (!answer) {
            enqueueSnackbar('Você não pode enviar um palpite em branco.', { variant: 'error' })
        }
    }


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

        <Box mb={2}>
            <Typography variant="h3">
                Seu palpite
        </Typography>
        </Box>

        <form onSubmit={handleSubmitAnswer}>
            <Box mb={3}>
                <TextField value={answer} onChange={handleSetAnswer} type="number" fullWidth variant="outlined" />
            </Box>


            <Button fullWidth variant="contained" color="primary" type="submit">
                Enviar palpite
        </Button>
        </form>
    </section>
}

export default RoomAnswer