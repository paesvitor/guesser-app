import { Box, Typography } from "@material-ui/core";
import { Logo } from "../../src/components/common/Logo";
import MainLayout from "../../src/components/common/MainLayout";
import RoomContainer from "../../src/components/room/RoomContainer";
import { RoomEndGame } from "../../src/components/room/RoomEndGame";

export default function Home() {
    return (
        <MainLayout>
            <Box mt={3} mb={0}>
                <Logo />
            </Box>
            <RoomContainer />

            {/* <RoomEndGame /> */}
        </MainLayout>
    )
}
