import type { Metadata } from 'next'
import './globals.css'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl'


export const metadata: Metadata = {
  title: 'StageTree',
  description: 'Somos uma empresa de tecnologia especializada na criação de aplicativos, sistemas web, web design. Focamos na evolução do seu negócio.',
}

const locales = ['en', 'pt', 'es']

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
