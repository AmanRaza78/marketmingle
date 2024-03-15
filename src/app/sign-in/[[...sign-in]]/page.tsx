import { SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';


export default function Signin() {
  return (
    <div className="flex items-center justify-center p-7">
      <SignIn appearance={{baseTheme:dark}} />
    </div>
  );
}
