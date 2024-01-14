import { redirect } from "next/navigation";

export default function Home() {
  redirect("/search");
  // return <h1>Home Works</h1>;
}
