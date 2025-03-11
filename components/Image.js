import Image from "next/image"

export default function NextImage({src, ...props}){
    return (
        <Image
            src={src}
            alt={src}
            width={900}
            height={900}
            {...props}
        />
    );
};