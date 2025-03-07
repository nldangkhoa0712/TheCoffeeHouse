import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../../images/download.jpg'

const SideBar = () => {
  const [active, setActive] = useState<number>(0)
  const classNameActive =
    'rounded-xl bg-amber-500 px-4 py-2 text-base text-white flex items-center gap-5 transition-all duration-300 scale-105 translate-x-2 ease-out'
  const classNameNotActive =
    'px-4 py-2 text-base text-black flex items-center gap-5 hover:bg-gray-100 translate-x-0 rounded-xl'
  const item = [
    { icon: PersonIcon, title: 'Personal Information', path: '/info/personal' },
    { icon: PersonIcon, title: 'Personal Information', path: '/info/password' },
    { icon: PersonIcon, title: 'Personal Information', path: '#' },
    { icon: PersonIcon, title: 'Personal Information', path: '#' },
  ]

  return (
    <div className="col-span-2">
      <div>
        {/* Avatar */}
        <img src={image} className="size-[200px] rounded-[100px]" alt="" />
        <div className="ml-2">
          <h1 className="text-2xl font-medium">Nguyễn Văn A</h1>
          <p className="text-base font-light">Admin</p>
        </div>
      </div>

      <ul className="mt-10 flex w-[60%] flex-col gap-5">
        {item.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              <li
                className={
                  index == active ? classNameActive : classNameNotActive
                }
                onClick={() => setActive(index)}
              >
                <span>{<item.icon></item.icon>}</span>
                {item.title}
              </li>
            </Link>
          )
        })}
      </ul>
      {/* <div className="">
        </div> */}
    </div>
  )
}

export default SideBar
