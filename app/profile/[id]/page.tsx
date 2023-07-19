import ProfilePage from "@/components/Profile/ProfilePage";
import { getUserProjects } from "@/lib/actions";
import { UserProfile } from "@/types";

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params }: Props) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };

  if (!result?.user) {
    return <p>Failed to fetch user info</p>;
  }

  return (
    <div>
      <ProfilePage user={result?.user} />
    </div>
  );
};

export default UserProfile;
