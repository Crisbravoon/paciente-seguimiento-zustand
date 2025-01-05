
export const Error = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-center my-4 text-white bg-red-600 font-bold p-2 text-sm uppercase">{children}</p>
    )
}
