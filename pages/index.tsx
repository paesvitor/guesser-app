import { Typography } from "@material-ui/core";
import MainLayout from "../src/components/common/MainLayout";
import { Signin } from "../src/components/common/Signin";

export default function Home() {
  return (
    <MainLayout>
      <Signin />
    </MainLayout>
  )
}
