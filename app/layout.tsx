import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gregory Curtis — Venture Capital Intelligence Platform",
  description: "AI-powered venture capital deal flow analysis and portfolio performance tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Ambient Background — Dark fintech with visible glow */}
        <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0a0f 100%)' }}>
          <div className="absolute -top-[10%] -left-[5%] w-[800px] h-[800px] rounded-full blur-[180px]" style={{ background: 'rgba(16, 185, 129, 0.18)' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[160px]" style={{ background: 'rgba(59, 130, 246, 0.12)' }} />
          <div className="absolute top-[50%] right-[20%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(139, 92, 246, 0.10)' }} />
        </div>
        {children}
      </body>
    </html>
  );
}
