import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';
import pcdimg from '../../public/about/pcdimg1.jpg'
export default function SizeDemo() {
    return (
        <>
            <Splitter className='surface-border' style={{  height: '300px' }}>
                <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center" size={75}><img className='w-4 h-4' src={pcdimg} alt="" /></SplitterPanel>
            </Splitter>
        </>
    )
}
        