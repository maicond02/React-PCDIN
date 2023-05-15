import Lateral from '@/components/Menu/Lateral'
import Posts from '@/components/Feed/Posts'

export default function Login() {
    return (
      <>
        <div className='grid'>
          <div className='col-2'>
            <Lateral />
          </div>
          <div className='col-10'>
            <Posts />
          </div>
        </div>
      </>
    )
  }