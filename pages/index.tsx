import { SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import ItemCard from "../components/ItemCard";
import ITEM_LIST from "../mocks/ITEM_LIST";

const Home: NextPage = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {ITEM_LIST.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </SimpleGrid>
  );
};

export default Home;
