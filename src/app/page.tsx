import { unstable_noStore as noStore } from "next/cache";
import Herosection from "~/components/herosection";
import Featuresection from "~/components/featuresection";
import Featureditem from "~/components/featureditems";
// import Link from "next/link";

// import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
    <Herosection/>
    <Featuresection/>
    <Featureditem/>
    </>
  );
}
