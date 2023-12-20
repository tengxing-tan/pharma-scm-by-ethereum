export default function RegisterLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex justify-center items-center py-16">
            {children}
        </div>
    )
}