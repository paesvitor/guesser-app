import { Box, Typography } from "@material-ui/core";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Logo } from "../../src/components/common/Logo";
import MainLayout from "../../src/components/common/MainLayout";
import RoomContainer from "../../src/components/room/RoomContainer";
import { RoomEndGame } from "../../src/components/room/RoomEndGame";
import { useSelector } from "../../src/utils/hooks/useSelector";

function Home() {
  const room = useSelector((state) => state.room);
  const router = useRouter();

  useEffect(() => {
    if (!room.data) {
      router.replace("/");
    }
  }, []);

  if (!room.data) {
    return null;
  }

  return (
    <MainLayout>
      <RoomContainer />

      {/* <RoomEndGame /> */}
    </MainLayout>
  );
}

export default Home;
