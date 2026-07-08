import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registy";
import Providers from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "KawanDev. | Desenvolvedor Full Stack",

  description: 'Portfólio de Kawan B. Knupp, desenvolvedor Full Stack especializado em Node.js, React, Next.js e TypeScript.',

  keywords: [        
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack",
    "Backend",
    "Frontend",
    "Portfólio",
    "JavaScript",
  ],

  authors: [{ name: 'Kawan Balonecker Knupp' }],
  creator: 'Kawan Balonecker Knupp',
  applicationName: 'Portifólio',

  openGraph: {
    title: "KawanDev. | Desenvolvedor Full Stack",

    description: "Portfólio de Kawan B. Knupp, desenvolvedor Full Stack especializado em Node.js, React, Next.js e TypeScript.",

    type: "website",

    locale: "pt_BR",

    images:[{ url:'/og-image.png', width: 400, height: 400, alt: 'Portifólio de Kawan' }]
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
