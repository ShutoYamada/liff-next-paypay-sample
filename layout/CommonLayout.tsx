import { Container, Paper } from "@mantine/core";
import { ReactElement } from "react";
import AppFooter from "../components/common/AppFooter";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const CommonLayout = ({ children }: LayoutProps) => (
  <Paper>
    <style jsx>
      {`
        #__next {
          height: 100vh;
        }
      `}
    </style>
    {children}
    <AppFooter
      links={[
        {
          link: "/",
          label: "フードコート",
        },
        {
          link: "/events",
          label: "イベント",
        },
      ]}
    />
  </Paper>
);

export default CommonLayout;
