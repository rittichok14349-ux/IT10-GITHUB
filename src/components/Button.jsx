import React from 'react'

const Button = (props) => {
  return (
    <>
        <a href="" className='px-8 py-4 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-700 transition'>
            {props.nameButton}
        </a>
    </>
  )
}

export default Button