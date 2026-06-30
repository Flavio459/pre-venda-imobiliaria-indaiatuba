import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://pre-venda-imobiliaria-indaiatuba.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pré-Venda Inteligente para Imobiliárias em Indaiatuba",
  description:
    "Landing page para imobiliárias e incorporadoras em Indaiatuba: qualificação de compradores, simulador, handoff para corretor e piloto de pré-venda digital.",
  keywords: [
    "pré-venda imobiliária",
    "imobiliária Indaiatuba",
    "Minha Casa Minha Vida Indaiatuba",
    "qualificação de leads imobiliários",
    "financiamento imobiliário Indaiatuba",
    "CRM imobiliário"
  ],
  openGraph: {
    title: "Pré-Venda Inteligente para Imobiliárias em Indaiatuba",
    description:
      "Eduque e qualifique o comprador antes do corretor entrar. Leads com contexto, prioridade e próximo passo.",
    url: siteUrl,
    siteName: "Pré-Venda Inteligente Indaiatuba",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
