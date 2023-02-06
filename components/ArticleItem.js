import { Card, Text, Link } from '@nextui-org/react'

const ArticleItem = ({ article }) => {
  return (
    <Card
      isPressable
      isHoverable
      css={{ marginBottom: '10px' }}
      onPress={(e) => {
        // <Link target="_blank" href="https://www.google.com"></Link>
        window.location.href = `/article/${article.id}`
      }}
    >
      <Card.Body>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {article.title}
        </Text>
        <Text color="white" css={{ my: 10 }}>
          {article.body}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default ArticleItem
