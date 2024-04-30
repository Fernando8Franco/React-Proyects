import { NavLink, Outlet } from 'react-router-dom'

export const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5]

  return (
    <div>
      {
        profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? 'active' : 'not active'
            }}
          >
            Profile {profile}
          </NavLink>
        ))
      }
      <Outlet/>
    </div>
  )
}
