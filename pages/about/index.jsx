import CardAbout from '../../components/About/Card'
import TimelineAbout from '../../components/TimelineAbout/TimelineAbout'
import FieldsetAbout from '../../components/FieldsetAbout/FieldsetAbout'
import curiosity from '../../public/about/curiosity.gif'
import Image from 'next/image';

export default function pageAbout (){
    return(
        <>
            <div className='flex align-items-center justify-content-center mt-2'> 
                <Image  src={curiosity} alt="teste" width={600} height={500}/>
            </div>
            <div className='mt-2'>
                <TimelineAbout/>
            </div>
            <div className='mt-2'>
                <FieldsetAbout/>
            </div>
        </>
    )
}


