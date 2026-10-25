import type { Metadata } from 'next';
import './globals.css';
import './components.css';
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/600.css';
import '@fontsource/vazirmatn/700.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import { Providers } from '@/app/providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BrushCursor } from '@/components/BrushCursor';

export const metadata: Metadata = {
  title: { default: 'گالری خورشید | هنر برای زندگی', template: '%s | گالری خورشید' },
  description: 'گالری خورشید؛ خانه‌ای برای کشف، آموختن و زندگی‌کردن با هنر.',
  metadataBase: new URL('https://khorshid.art'),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body><Providers><Header />{children}<Footer /><BrushCursor /></Providers></body></html>;
}
