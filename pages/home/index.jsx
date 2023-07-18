import Lateral from '@/components/Menu/Lateral'
import Posts from '@/components/Feed/Posts'

export default function Login() {



    return (
      <>
          <div className='grid flex justify-content-center'>
              <div className='hidden md:block col-12 md:col-2'>
                <Lateral/>
              </div>
              <div className='col-12 md:col-8'>
                <Posts />
              </div>
          </div>
      </>
    )
  }