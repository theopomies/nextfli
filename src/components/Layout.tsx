import Head from "next/head";
import { ReactNode } from "react";

export declare interface LayoutProps {
  pageTitle?: string;
  children?: ReactNode;
  description?: string;
}

const TITLE = "Nextfli";
const OG_IMAGE =
  "https://og-image.vercel.app/%3D%20**Nextfli**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F08%2FNetflix_2015_logo.svg%2F1597px-Netflix_2015_logo.svg.png&widths=300&widths=350&heights=undefined&heights=auto";
const DEFAULT_DESC = "A Netflix clone made to play around Next.js!";

export function Layout({
  pageTitle = TITLE,
  children = null,
  description = DEFAULT_DESC,
}: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{pageTitle}</title>
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="og:title" content={TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <>{children}</>
    </>
  );
}
