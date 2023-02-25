import React from 'react'

const Content = (props) => {
  return (
    <div className='text-[#1F1F1F] w-[95%] rounded-md  my-4 mx-auto' style={{backgroundColor: props.bg}}>
        <h1 className=' font-bold font-popins'>Handouts</h1>
        <ul className='list-disc' style={{listStyleType: 'disc'}}>
            <li className=' capitalize'><a href=''>faculty of computing and mathematical science (FACMS)</a></li>
            <li className='capitalize'><a href=''>faculty of engineering (FAENG)</a></li>
            <li className='capitalize'><a href=''>faculty of agriculture and agricultural technology (FAAT)</a></li>
            <li className='capitalize'><a href=''>faculty of sciences (FASCI)</a></li>
            <li className='capitalize'><a href=''>faculty of science of technology education (FAsCITE)</a></li>
            <li className='capitalize'><a href=''>faculty of earth and environmental sciences</a></li>
        </ul>
    </div>
  )
}

export default Content