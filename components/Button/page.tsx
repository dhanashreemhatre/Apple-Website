import React from 'react'

const page = ({...props}) => {
    const buttonClass = props.btnStyle === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white';
  return (
    <button type='button' className={`py-2 px-5 ${buttonClass} rounded-3xl text-xs md:text-sm`}>{props.name}</button>
  )
}

export default page