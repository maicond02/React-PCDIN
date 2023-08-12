import CardAbout from '../../components/About/Card'
import SpliterAbout from '../../components/About/Spliter'
import TimelineAbout from '../../components/TimelineAbout/TimelineAbout'
import FieldsetAbout from '../../components/FieldsetAbout/FieldsetAbout'

export default function pageAbout (){
    return(
        <>
            <div className='mt-1'>
                <FieldsetAbout/>
            </div>
            <div className='mt-2'>
                <TimelineAbout/>
            </div>
        </>
    )
}


