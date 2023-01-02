import LayoutBase from './LayoutBase'
import { ArticleLock } from './components/ArticleLock'
import NotionPage from '@/components/NotionPage'
import { ArticleInfo } from './components/ArticleInfo'
import Comment from '@/components/Comment'
import { ArticleFooter } from './components/ArticleFooter'

export const LayoutSlug = props => {
  const { post, lock, validPassword ,page_cover} = props
  if (!post) {
    return <LayoutBase {...props} />
  }
  let defaultCover = 'https://objectstorage.ap-seoul-1.oraclecloud.com/n/cno3iavztv8w/b/mybox/o/blog-default.jpg'
  if(post.page_cover) {
    defaultCover = post.page_cover
  }

  return (
        <LayoutBase {...props}>

                {lock && <ArticleLock validPassword={validPassword} />}

                {!lock && <div id="notion-article" className="px-2">
                    {post && <>
                        <ArticleInfo post={post} />
                        <img className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 h-48 w-full object-cover shadow opacity-85" src={defaultCover}></img>
                        <NotionPage post={post} />
                        <Comment frontMatter={post}/>
                        <ArticleFooter />
                    </>}
                </div>}

        </LayoutBase>
  )
}
