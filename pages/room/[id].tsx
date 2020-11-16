import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Logo } from "../../src/components/common/Logo";
import MainLayout from "../../src/components/common/MainLayout";
import RoomContainer from "../../src/components/room/RoomContainer";
import { RoomEndGame } from "../../src/components/room/RoomEndGame";
import firebase from 'firebase'
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { roomActions } from "../../src/store/modules/room/actions";

export default function Home() {
    const ref = firebase.database().ref("rooms");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    function handleFetchRoomData(roomId: any) {
        ref.child(roomId).once('value').then(snapshot => dispatch(roomActions.setRoom(snapshot.val())))
    }

    function handleListenConnections(roomId: any) {
        ref.child(`${roomId}/players`).on('value', (snapshot) => console.log(snapshot.val()))
    }

    useEffect(() => {
        const roomId = router.query.id;

        if (roomId) {
            handleFetchRoomData(roomId)
            handleListenConnections(roomId)
        }
    }, [router.query])

    return (
        <MainLayout>
            {loading ? <Box pt={4} flex={1} display="flex" alignItems="center" justifyContent="center">
                <CircularProgress />
            </Box> : <RoomContainer />}
        </MainLayout>
    )
}
