function Image({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <img
      className="w-full my-2 object-cover"
      src={src}
      alt={alt}
      title={title}
    />
  );
}

export default Image;
