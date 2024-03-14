import { SignIn } from "@clerk/nextjs";

export default function Signin() {
  return (
    <div className="flex items-center justify-center p-7">
      <SignIn />
    </div>
  );
}
