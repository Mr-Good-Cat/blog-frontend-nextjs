import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="mr-14"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  );
}
