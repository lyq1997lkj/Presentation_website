import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Development Timeline | The Evolution of Artificial Intelligence',
  description: 'Explore the fascinating journey of AI development through an interactive timeline, case studies, and future predictions.',
  keywords: 'AI development, artificial intelligence, machine learning, deep learning, AI timeline, AI ethics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navigation />
            <div className="pt-16">
              {children}
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}