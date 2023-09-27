import Calculator from '@/components/calculator'

export const runtime = 'edge';

export default function Home() {
  return (
    <main className=" text-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
    rounded-lg p-2 overflow-hidden">
      <Calculator></Calculator>
    </main>
  )
}