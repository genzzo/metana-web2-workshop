import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  src: string | StaticImport;
  alt: string;
};

export default function BackgroundImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      className="-z-10 object-cover"
    />
  );
}
