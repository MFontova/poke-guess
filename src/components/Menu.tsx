import Link from "next/link"

export const Menu = () => {
  const menuItems = [
    {
      label: 'Guess',
      path: '/'
    },
    {
      label: 'Shadow',
      path: '/shadow'
    }
  ]

  return (
    <header>
      <nav className="flex justify-center gap-10 py-5">
        {
          menuItems.map(i => (
            <Link href={i.path} key={i.path} >{i.label}</Link>
          ))
        }
      </nav>
    </header>
  )
}