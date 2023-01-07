import 'gitalk/dist/gitalk.css'
import BLOG from '@/blog.config'
import GitalkComponent from 'gitalk/dist/gitalk-component'

const Gitalk = ({ frontMatter }) => {
  // 修改gitalk id名字超过50个导致无法使用的问题
  let gid = frontMatter.id
  if (gid != null && gid.length >= 50) {
    gid = gid.substring(0, 49)
  }
  return <GitalkComponent options={{
    id: gid,
    title: frontMatter.title,
    clientID: BLOG.COMMENT_GITALK_CLIENT_ID,
    clientSecret: BLOG.COMMENT_GITALK_CLIENT_SECRET,
    repo: BLOG.COMMENT_GITALK_REPO,
    owner: BLOG.COMMENT_GITALK_OWNER,
    admin: BLOG.COMMENT_GITALK_ADMIN.split(','),
    distractionFreeMode: JSON.parse(BLOG.COMMENT_GITALK_DISTRACTION_FREE_MODE)
  }} />
}

export default Gitalk
