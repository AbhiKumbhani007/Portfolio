import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Abhishek Kumbhani",
    alternateName: "Abhishek",
    url: "https://abhishek-kumbhani.vercel.app/",
    jobTitle: "Software Developer & Tech Enthusiast",
    worksFor: {
      "@type": "Organization",
      name: "Vrutti Technologies",
    },
    alumniOf: "Sarvajanik College of Engineering & Technology",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    email: "abhi1234kumbhani@gmail.com",
    telephone: "+91-96242-99959",
    sameAs: [
      "https://www.linkedin.com/in/abhishek-kumbhani/",
      "https://github.com/AbhiKumbhani007",
      // Add other social media or professional profile URLs
    ],
    image: "https://abhishek-kumbhani.vercel.app/portfolio.png",
  };

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <title>Abhishek Kumbhani - Software Developer & Tech Enthusiast</title>
        <meta
          name="description"
          content="Abhishek Kumbhani's official portfolio website showcasing skills, projects, and experience in software development and technology."
        />

        <link rel="canonical" href="https://abhishek-kumbhani.vercel.app/" />
        <meta
          property="og:title"
          content="Abhishek Kumbhani - Software Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio to see my work in software development and technology."
        />
        <meta
          property="og:image"
          content="https://abhishek-kumbhani.vercel.app/portfolio.png"
        />
        <meta
          property="og:url"
          content="https://abhishek-kumbhani.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abhishek Kumbhani - Software Developer"
        />
        <meta
          name="twitter:description"
          content="Check out my portfolio to see my latest work in software development."
        />
        <meta
          name="twitter:image"
          content="https://abhishek-kumbhani.vercel.app/portfolio.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <title>Abhishek Kumbhani</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
