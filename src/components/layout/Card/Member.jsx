function Member({
    name,
    description,
    children,
}: {
    name: string,
    description: string,
    children?: string,
}) {
    return (
        <div className="flex gap-4">
            <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
                <img
                    src="https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-medium">{name}</h3>
                {children}
                <p>{description}</p>
            </div>
        </div>
    );
}

export { Member }