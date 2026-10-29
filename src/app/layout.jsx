import "./globals.css";
import "./responsive.css";

import Providers from "@/store/Providers";
import InitEffects from "../components/InitEffects";
import api from "@/helper/api.interceptor";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Next js",
  description: "Next js",
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }) {
  const CountryListData = await api.CountryList();
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/android-chrome-512x512.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="manifest" href="/images/site.webmanifest" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="{{page_title}}" />
          <meta name="twitter:description" content="{{page_description}}" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:site" content="@Next js" />
          <meta name="twitter:creator" content="@Next js" />
          <link rel="canonical" ng-attr-href="" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Next js" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          ></link>
        </head>
        <body>
          <Providers>
            <InitEffects countryList={CountryListData} />
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
