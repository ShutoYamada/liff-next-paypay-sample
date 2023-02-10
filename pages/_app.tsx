import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [liffObject, setLiffObject] = useState<any | null>(null);

  useEffect(() => {
    // SSR対応のため動的importしている
    import("@line/liff").then((liff: any) => {
      liff
        .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string })
        .then(() => {
          setLiffObject(liff);
          if (liff.isLoggedIn()) {
            // ログインの確認を取れたら
            // setStatus("LINEログインに成功しました。");
            // setIsLogined(true);
          }
        })
        .catch((err: any) => {
          console.error({ err });
          // setStatus("LINEログインに失敗しました。");
        });
    });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
