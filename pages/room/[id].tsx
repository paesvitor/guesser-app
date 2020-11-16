import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Logo } from "../../src/components/common/Logo";
import MainLayout from "../../src/components/common/MainLayout";
import RoomContainer from "../../src/components/room/RoomContainer";
import { RoomEndGame } from "../../src/components/room/RoomEndGame";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { roomActions } from "../../src/store/modules/room/actions";

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [router.query])

    return (
        <MainLayout>
            {loading ? <Box pt={4} flex={1} display="flex" alignItems="center" justifyContent="center">
                <CircularProgress />
            </Box> : <RoomContainer />}
        </MainLayout>
    )
}
