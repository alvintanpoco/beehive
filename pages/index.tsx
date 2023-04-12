import Image from 'next/image'
import { Inter } from 'next/font/google'
import BeeHivePlot from '@/components/BeeHivePlot'

const inter = Inter({ subsets: ['latin'] })

const data = [
  { name: 'Segment A', value: 20 },
  { name: 'Segment B', value: 30 },
  { name: 'Segment C', value: 10 },
  { name: 'Segment D', value: 40 },
  { name: 'Segment E', value: 15 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <BeeHivePlot data={data} width={500} height={500} />
      </div>
    </main>
  )
}
