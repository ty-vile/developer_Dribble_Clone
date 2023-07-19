import { UserProfile } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: UserProfile;
};

const ProfilePage = ({ user }: Props) => {
  const {
    id,
    name,
    email,
    description,
    avatarUrl,
    githubUrl,
    linkedinUrl,
    projects,
  } = user;

  console.log("ONE", projects?.edges[0].node?.id);
  return (
    <div className="px-5 w-full  flex flex-col">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full flex flex-col justify-between lg:w-6/12 ">
          <div className="flex items-center  gap-4">
            <Image
              src={avatarUrl}
              width={70}
              height={70}
              alt="User Image"
              className="rounded-full object-cover"
            />
            <h1 className="text-6xl font-bold text-purple-500">{name}</h1>
          </div>
          <div className="mt-8">
            <h2 className="text-4xl font-semibold">
              View my awesome projects - and get in contact if you would like to
              work
            </h2>
            <div className="flex items-center w-full gap-4 mt-6">
              <Link
                href={githubUrl ? githubUrl : "https://github.com"}
                className="p-3 bg-purple-300 w-fit rounded-full border-4 border-black"
              >
                <Image
                  src="/github.svg"
                  width={40}
                  height={40}
                  alt="Github Logo"
                />
              </Link>
            </div>
          </div>
          <div> </div>
        </div>
        <div className="relative w-full lg:w-6/12 bg-yellow-100 h-[700px]">
          <Image
            src={projects?.edges[0]?.node?.image}
            fill
            alt="Main project"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
