import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession();

  if (!session) {
    return (
    <main className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button className="bg-white p-2 px-4 rounded-lg">Sign up with google</button>
     </div>
    </main>
   )
  }

  return (
    <div>Logged in {session.user?.email}</div>
  )
  
}
