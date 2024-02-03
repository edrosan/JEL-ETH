function BentoElement({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) {
    return (
      <div
        className={` flex items-center justify-center overflow-hidden rounded-xl  ${className}`}
      >
        <img src={src} alt={alt} className="w-[200px] object-cover" />
      </div>
    );
  }

  export { BentoElement }