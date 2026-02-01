import Link from 'next/link'
import demoBlogData from './demoBlogData.json'

export default function BlogPage() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>Blog</h1>
      <div className='flex flex-col gap-4'>
        {demoBlogData.map((post) => (
          <div
            key={post.id}
            className='p-4 border border-border rounded-md w-full'
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className='text-lg font-semibold mb-2 text-primary hover:underline'>
                {post.title}
              </h2>
            </Link>
            <div className='text-sm text-muted-foreground mb-2'>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
