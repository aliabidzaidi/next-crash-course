import { Grid, Card, Text } from '@nextui-org/react'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </Grid>
    </Grid.Container>
  )
}

export default ArticleList
