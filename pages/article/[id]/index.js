import { useRouter } from 'next/router'
import { Text, Link } from '@nextui-org/react'

const article = ({ article }) => {
  //   const router = useRouter()
  //   const { id } = router.query

  return (
    <>
      <Text
        h1
        size={18}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight="bold"
      >
        {article.title}
      </Text>

      <Text> {article.body}</Text>
      <br />
      <Link block color="warning" href="/">
        {' '}
        Go back
      </Link>
    </>
  )
}

// getStaticProps creates a static site with all content, instead of fetching from api everytime in getServerSideProps
// export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
export default article
