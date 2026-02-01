import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-5xl font-bold'>くしくし話</h1>
        <p className='text-xl text-muted-foreground'>
          Tailwind CSS v4 + Shadcn/ui で構築中...
        </p>
        <Button size='lg'>はじめる</Button>
      </div>
    </div>
  )
}
