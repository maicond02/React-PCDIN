import Lateral from '@/components/Menu/Lateral'
import Posts from '@/components/Feed/Posts'

export default function Login() {
    return (
      <>
        <div className='flex align-items-center justify-content-center'>
          <div className='grid w-10'>
              <div className='col-2'>
                <Lateral />
              </div>
              <div className='col-10'>
                <Posts />
              </div>
            </div>
        </div>
      </>
    )
  }