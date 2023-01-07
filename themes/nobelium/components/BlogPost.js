import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.SUB_PATH}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-6 md:mb-8">
          <div className="md:flex">
            <img className="h-28 w-full object-cover md:h-28 md:w-28 rounded-md shadow-md opacity-75" alt='' src={post.page_cover}></img>
            <div className="flex flex-col justify-between mx-0 md:mx-5">
              <header className="flex flex-col justify-between  md:items-baseline my-1 md:my-0">
                <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                  {post.title}
                </h2>
                <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {formatDate(post?.date?.start_date || post.createdTime, BLOG.LANG)}
                </time>
              </header>
              <main>
                <p className="hidden md:block leading-7 text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>
              </main>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
