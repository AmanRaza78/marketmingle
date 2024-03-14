import { SignUp } from "@clerk/nextjs";
 
export default function Signup() {
    return(
    <div className="flex items-center justify-center p-7">
      <SignUp />
    </div>
    )
}