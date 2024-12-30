import Link from "next/link";
import Shell from "./Shell";

export default function Page() {
  console.warn(Shell);

  return (
    <>
      <h1>Hello Next.js!</h1>
      <Link href={"./blog"}>Blog </Link>
      <Link href={"./restaurants"}>Restaurants</Link>
    </>
  );
}
