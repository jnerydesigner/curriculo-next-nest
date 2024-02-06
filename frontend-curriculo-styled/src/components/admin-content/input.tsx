import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  place?: string
  title: string
  classProps?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, name, place, title, classProps, ...rest }, ref) => {
    return (
      <>
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
        >
          {title}
        </label>
        <input
          ref={ref}
          type="text"
          id={label}
          placeholder={place}
          name={name}
          className={`block w-full p-2 text-gray-500 border border-gray-400 rounded-lg placeholder:text-slate-300 placeholder:italic ${classProps}`}
          {...rest}
        />
      </>
    )
  }
)

export default Input
