import Lateral from '@/components/Menu/Lateral'
import Posts from '@/components/Feed/Posts'

export default function Login() {



    return (
      <>
        <div className='flex align-items-center justify-content-center'>
          <div className='grid'>
              <div className='hidden md:block col-12 md:col-3'>
                <Lateral/>
              </div>
              <div className='col-12 md:col-7'>
                <Posts />
              </div>
          </div>
        </div>
      </>
    )
  }