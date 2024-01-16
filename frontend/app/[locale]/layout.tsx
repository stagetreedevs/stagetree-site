import type { Metadata } from 'next'
import './globals.css'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl'


export const metadata: Metadata = {
  title: 'StageTree - Novos Negócios em TIC',
  description: 'Somos uma empresa de tecnologia especializada na criação de aplicativos, sistemas web, web design. Focamos na evolução do seu negócio.',
  keywords: 'stagetree, tic, ict, tecnologias, são gonçalo do amarante, azure, aws, react native, flutter, nextjs, archivematica, docker, kubernets, reactjs, angular, django, nest, node, desenvolvimento de software, soluções em ti, infraestrutura de ti, consultoria em ti, integração de sistemas, suporte tecnico, manutenção de sistemas, fullstack, backend, frontend, devops, microserviços, apis, inteligencia artificial',
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
    return notFound();
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
