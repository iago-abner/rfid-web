import Link from "next/link";

export function Header() {
  return (
    <header className="absolute w-full max-w-screen">
      <div className="max-w-full bg-backgroundPrimary h-[72px] flex items-center">
        <nav className="mx-8 w-full flex" aria-label="Top">
          <div className="flex w-full ml-8 items-center gap-8">
            <Link href='/' className="text-pink cursor-pointer">Home</Link>
            <Link href='/register' className="text-pink cursor-pointer">Register</Link>
            <Link href='/dashboard' className="text-pink cursor-pointer">Dashboard</Link>
            <Link href='/calendar' className="text-pink cursor-pointer">Calendar</Link>
            <Link href='/reports' className="text-pink cursor-pointer">Reports</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
