import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* analytics old style */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-179626972-1`}
      />

      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-179626972-1', {
        page_path: window.location.pathname,
      });
  `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
