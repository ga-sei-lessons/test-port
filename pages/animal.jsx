export default function Animal({ data }) {
  return(
    <h1>Random Animal {data.randomAnimal}</h1>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.SERVER_URL}/api/randomAnimal`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  // shows up in server console
  console.log(data)
  console.log(process.env.SERVER_URL)
  return {
    props: { data }, // will be passed to the page component as props
  }
}
