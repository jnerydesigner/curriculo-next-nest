interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'

  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'color-personal'
  classProps?: string
}

export function Button({
  children,
  variant,
  type,
  classProps,
  ...rest
}: Props) {
  let bgColor =
    'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
  if (variant === 'primary') {
    bgColor =
      'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
  } else if (variant === 'color-personal') {
    bgColor = classProps
  }

  return (
    <button className={`${bgColor}`} {...rest}>
      {children}
    </button>
  )
}
