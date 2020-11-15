import { Box, Container, LinearProgress, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import Countdown from 'react-countdown';

function RoomTimer() {
    const classes = useStyles();
    const [timeLeft, setTimeLeft] = useState(0);
    const roundSeconds = 30000

    useEffect(() => {
        console.log(Date.now())
    }, []);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const percentage = (seconds * 100) / (roundSeconds / 1000);

        if (completed) {
            // Render a completed state
            return <Box height={21} />
        } else {
            return <LinearProgress className={classes.timer} value={percentage} variant="determinate" />
        }
    };

    return <Box pt={2}>
        <Typography align="center">
            Rodada 6/10
        </Typography>

        <Box mb={1}>
            <Typography variant="h4" align="center">
                {timeLeft === 0 ? 'Aguardando jogadores para próxima rodada' : 'Tempo restante'}
            </Typography>
        </Box>

        <Box mb={3}>
            <Countdown
                onComplete={() => console.log('acabout o ste')}
                date={Date.now() + roundSeconds}
                renderer={renderer}
            />
        </Box>
    </Box>
}

export default RoomTimer