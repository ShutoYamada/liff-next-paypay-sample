import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import liff, { Liff } from "@line/liff";
import { Center, Container } from "@mantine/core";
import ItemDetailCard from "../../components/ItemDetailCard";
import ITEM_LIST from "../../mocks/ITEM_LIST";

const RoomDetailPage = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { item_id } = router.query;
  const item = ITEM_LIST.find((item) => item.id === item_id);
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [status, setStatus] = useState<string>("LINEログイン中...");
  const [isLogined, setIsLogined] = useState<boolean>(false);

  useEffect(() => {
    liff
      .init({ liffId: process.env.LIFF_ID as string })
      .then(() => {
        setLiffObject(liff);
        if (liff.isLoggedIn()) {
          // ログインの確認を取れたら
          setStatus("LINEログインに成功しました。");
          setIsLogined(true);
        }
      })
      .catch((err: any) => {
        console.error({ err });
        setStatus("LINEログインに失敗しました。");
      });
  }, []);

  const onClickPurchase = useCallback(() => {
    // console.log("item");
    // console.log(item);
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
      </Center>
    </>
  );
};

export default RoomDetailPage;
