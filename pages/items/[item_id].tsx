import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Center, Container } from "@mantine/core";
import ItemDetailCard from "../../components/items/ItemDetailCard";
import ITEM_LIST from "../../mocks/ITEM_LIST";
import type { NextPageWithLayout } from "next";
import CommonLayout from "../../layout/CommonLayout";

const ItemDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { item_id } = router.query;
  const item = ITEM_LIST.find((item) => item.id === item_id);
  const [status, setStatus] = useState<string>("LINEログイン中...");
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("null");

  useEffect(() => {
    import("@line/liff").then((liff: any) => {
      if (liff.isLoggedIn()) {
        const context = liff.getContext();
        const liffToken = liff.getAccessToken();
        // setUid(context.userId)
        // setAccessToken(liffToken);
        setIsLogined(true);
        setStatus("LINEログインに成功しました。");
        setUserId(context?.userId);
      }
    });
  }, []);

  const onClickPurchase = useCallback(() => {
    alert("購入：" + item?.title);
  }, [item]);

  if (!item) {
    return <Center>404 Not Found.</Center>;
  }

  return (
    <>
      <Center>
        <ItemDetailCard
          item={item}
          canPurchase={isLogined}
          onClickPurchase={onClickPurchase}
        />
      </Center>
      <Center>
        <p>状態：{status}</p>
        <p>ユーザID：{userId}</p>
      </Center>
    </>
  );
};

ItemDetailPage.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
export default ItemDetailPage;
