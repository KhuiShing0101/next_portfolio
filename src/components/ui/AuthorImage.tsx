import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-48 h-36 group sm:w-56 sm:h-42 lg:w-64 lg:h-48">
      <Image
        src={src}
        alt={alt}
        width={256}
        height={192}
        className="rounded shadow-xl object-cover"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
