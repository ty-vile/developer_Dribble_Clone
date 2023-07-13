import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

function ProjectCard({
  id,
  title,
  image,
  name,
  avatarUrl,
  userId,
}: ProjectCardProps) {
  return (
    <div className="flex items-center justify-center flex-col shadow-xl rounded-2xl">
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
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
