export function Heading({
    heading,
    children
}: {
    heading: string,
    children?: React.ReactNode
}) {
    return (
        <div className="flex justify-between">
            <h1 className="pb-3 text-3xl font-bold  text-gray-700">{heading}</h1>
            {children}
        </div>
    );
}