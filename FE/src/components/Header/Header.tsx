import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { storageService } from '../../storage'
import '../../styles/component/header.css'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'

const Header = () => {
  const navigate = useNavigate()
  const userAccount = storageService.getUser()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <nav className="header-nav">
      <div>
        <Link className="logo-header" to={'/'}>
          {/* <img className="logo-header" src={TheCoffeeHouse} alt="" /> */}
          COFFEE & TEA
          {/* <p className="logo-header">COFFEE & TEA</p> */}
        </Link>
      </div>
      <ul className="list">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
      </ul>

      {userAccount ? (
        <div className="">
          <IconButton id="basic-menu" onClick={handleClick}>
            <Avatar
              src="/static/images/avatar/1.jpg"
              sx={{ width: '56px', height: '56px' }}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div className="auth">
          <button className="btn btn-signup">
            <Link to={'#'}>Register</Link>
          </button>
          <button className="btn btn-login">
            <Link to={'#'}>Login</Link>
          </button>
        </div>
      )}

      {/* <div className="auth absolute right-[100px]">
        <button className="btn btn-signup">
          <Link to={'#'}>Register</Link>
        </button>
        <button className="btn btn-login">
          <Link to={'#'}>Login</Link>
        </button>
      </div> */}
    </nav>
  )
}

export default Header
