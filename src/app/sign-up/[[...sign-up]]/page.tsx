import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
 
export default function Signup() {
    return(
    <div className="flex items-center justify-center p-7">
      <SignUp appearance={{baseTheme:dark}}/>
    </div>
    )
}