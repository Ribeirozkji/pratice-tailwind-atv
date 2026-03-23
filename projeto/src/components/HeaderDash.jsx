import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Time', href: '#', current: false },
  { name: 'Projetos', href: '#', current: false },
  { name: 'Calendário', href: '#', current: false },
  { name: 'Reporte-se', href: '#', current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderDash() {
  return (
    <div className="min-h-full bg-slate-950 text-white">
      <Disclosure as="nav" className="border-b border-blue-500/10 bg-slate-900/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500"
                  className="size-8"
                />
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30'
                          : 'text-slate-300 hover:bg-blue-500/10 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center gap-3 md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full p-2 text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="size-9 rounded-full object-cover outline outline-1 -outline-offset-1 outline-blue-400/20"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-slate-900 py-2 shadow-lg outline outline-1 -outline-offset-1 outline-blue-500/20 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-300 transition data-[focus]:bg-blue-500/10 data-[focus]:text-white data-[focus]:outline-none"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition hover:bg-blue-500/10 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="border-t border-blue-500/10 bg-slate-900 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-300 hover:bg-blue-500/10 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>

          <div className="border-t border-blue-500/10 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-10 rounded-full object-cover outline outline-1 -outline-offset-1 outline-blue-400/20"
                />
              </div>

              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm text-slate-400">{user.email}</div>
              </div>

              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full p-2 text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 transition hover:bg-blue-500/10 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <header className="relative border-b border-blue-500/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">
            Painel com tema escuro em azul profundo
          </p>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          
        </div>
      </main>
    </div>
  )
}