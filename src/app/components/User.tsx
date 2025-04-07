import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <div className="flex flex-row shrink-0 items-center space-x-4 justify-center">
      <div>Hello {user?.firstName || ""}! </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
