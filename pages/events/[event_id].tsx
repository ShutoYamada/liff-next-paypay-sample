import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "next";
import { Center, Container } from "@mantine/core";
import ItemDetailCard from "../../components/items/ItemDetailCard";
import EVENT_LIST from "../../mocks/EVENT_LIST";
import StampRallyDetailCard from "../../components/events/StampRallyDetailCard";
import CommonLayout from "../../layout/CommonLayout";

const EventDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { event_id } = router.query;
  const event = EVENT_LIST.find((event) => event.id === event_id);
  const [userId, setUserId] = useState<string>("null");

  const onClickPurchase = useCallback(() => {
    alert("購入：" + event?.title);
  }, [event]);

  if (!event) {
    return <Center>404 Not Found.</Center>;
  }

  return (
    <>
      <Center>
        <StampRallyDetailCard event={event} onClickPurchase={onClickPurchase} />
      </Center>
      <Center>
        <p></p>
      </Center>
    </>
  );
};

EventDetailPage.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
export default EventDetailPage;
