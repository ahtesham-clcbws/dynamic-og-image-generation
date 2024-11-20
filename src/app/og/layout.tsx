import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Sidebar from '@/components/ui/Sidebar'
import Alert from '@/components/ui/Alert'

export const metadata: Metadata = {
  title: {
    template: '%s - DOG',
    default: 'Dynamic OG',
  },
  description: "Create Dynamic og images for free !"
    ,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex gap-2'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className='px-1 lg:px-3 py-8 w-full'>
        <div className='lg:hidden mb-4'>
          <Alert text='Best viewed in larger screens , OG images may/will disorient. Use View as Image' color='amber' />
        </div>
        {children}
      </div>
    </section>
  )
}
