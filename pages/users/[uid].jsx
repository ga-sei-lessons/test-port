// import use router hook
import { useRouter } from 'next/router'

export default function UserIdPage() {
  // open instance of useRouter
  const router = useRouter()

  // pull the path param (called query) from router object (same as file name)
  const { uid } = router.query

  return (
    <h1>Hello User at id {uid}</h1>
  )
}