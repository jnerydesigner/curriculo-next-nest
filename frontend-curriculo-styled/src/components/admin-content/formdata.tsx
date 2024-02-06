interface FormDataProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export default function FormDataAdmin({ children, ...rest }: FormDataProps) {
  return (
    <form
      className="w-1/2 p-4 flex flex-col justify-center items-center gap-4
        border-2 border-slate-500 rounded bg-slate-200 drop-shadow-md mt-2"
      {...rest}
    >
      {children}
    </form>
  )
}
