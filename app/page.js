import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-between w-full h-[300px]">
      <div className="pl-8">
        <h1>Welcome to my site, bozo</h1>
      </div>
      <div className="relative h-full w-[300px]">
        <Image 
          src="/IMG_9291.jpeg" 
          alt="A description of the image" 
          fill
          className="object-cover rounded-r-lg"
        />
      </div>
    </div>

  );
}
