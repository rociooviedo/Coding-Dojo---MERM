import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Favorite authors</h1>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/new'}>Add an author</NavLink>
    </div>
  )
}

export default Navbar