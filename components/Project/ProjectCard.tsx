import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  id: string;
  image: string;
  title: string;
  name?: string;
  avatarUrl?: string;
  userId?: string;
};

function ProjectCard({
  id,
  title,
  image,
  name,
  avatarUrl,
  userId,
}: ProjectCardProps) {
  const genRandomLikes = () => {
    return Math.floor(Math.random() * 10000);
  };

  const genRandomViews = () => {
    return String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k");
  };

  return (
    <div className="flex items-center justify-center flex-col shadow-xl rounded-2xl">
      {/* project img section */}
      <Link
        href={`/project/${id}`}
        className="flex items-center group relative w-full h-full rounded-2xl"
      >
        <Image
          src={image}
          height={414}
          width={314}
          alt="Project Image"
          className="w-full h-full object-cover"
        />

        <div className="hidden group-hover:flex justify-end items-end w-full h-1/3 bg-gradient-to-b from-transparent to-black/50  gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4 transition-fast">
          <p className="w-full">{title}</p>
        </div>
      </Link>
      {/* end project img section */}
      {/* project info section */}
      <div className="flex items-center justify-between w-full px-2 my-4 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flex items-center gap=2">
            <Image
              src={avatarUrl}
              width={32}
              height={32}
              className="rounded-full"
              alt="User Avatar"
            />
            <p className="pl-2 font-bold">{name}</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src="/hearth.svg" height={20} width={20} alt="Likes Icon" />
            <p className="text-sm text-gray-300 font-bold">
              {genRandomLikes()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/eye.svg" height={20} width={20} alt="Views Icon" />
            <p className="text-sm text-gray-300 font-bold">
              {genRandomViews()}
            </p>
          </div>
        </div>
      </div>
      {/* end project info section */}
    </div>
  );
}

export default ProjectCard;
