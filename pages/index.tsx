import Image from 'next/image'
import { Inter } from 'next/font/google'
import BeeHivePlot from '@/components/BeeHivePlot'
import Parent from '@/components/Parent'
import SwitchDarkMode from '@/components/SwitchDarkMode'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-radix_indigo-1 to-radix_indigo-2 dark:from-radix_indigo_dark-1 dark:to-radix_indigo_dark-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
      </div>
      <div style={{ width: "300px", height: "300px" }}>
       <SwitchDarkMode />
      </div>
    </main>
  )
}
