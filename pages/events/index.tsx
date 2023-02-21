import { SimpleGrid } from "@mantine/core";
import type { NextPageWithLayout } from "next";
import EventCard from "../../components/events/EventCard";
import CommonLayout from "../../layout/CommonLayout";
import EVENT_LIST from "../../mocks/EVENT_LIST";

const Home: NextPageWithLayout = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {EVENT_LIST.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </SimpleGrid>
  );
};

Home.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
export default Home;
