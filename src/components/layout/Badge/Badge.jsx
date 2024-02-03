function Badge({ children }: { children: string }) {
    return (
      <div>
        <span className=" p-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800">
          {children}
        </span>
      </div>
    );
  }

  export { Badge }