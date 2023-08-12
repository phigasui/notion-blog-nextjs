import NextHead from "next/head";

export function Head({ title }: { title?: string }) {
  return (
    <NextHead>
      <title>{title && `${title} | `}phigasui's blog</title>
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  )
}
