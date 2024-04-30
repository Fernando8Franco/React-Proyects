import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
  const params = useParams<{ profileId: string }>()
  return (
    <h1>Profile Page {params.profileId}</h1>
  )
}
