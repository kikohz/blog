import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false

  return <footer
     className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
       !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
     }`}
   >
     <DarkModeButton className='text-center py-4'/>
     <hr className="border-gray-200 dark:border-gray-600" />
     <div className="my-4 text-sm leading-6">
       <div className="flex items-center justify-between flex-wrap">
         <p>
           © llost {currentYear}
         </p>
         <a
           href="https://www.cloudflare.com"
           target="_blank"
           rel="noreferrer"
           aria-label="Cloudflare"
           className="inline-flex items-center gap-1"
         >
           <span className="text-xs">Powered by</span>
           <img
             src="https://cdn.simpleicons.org/cloudflare/F38020"
             alt="Cloudflare"
             className="h-4 w-auto"
           />
         </a>
       </div>
     </div>
   </footer>
}
