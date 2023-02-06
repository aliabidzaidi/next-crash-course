// import headerStyles from '../styles/Header.module.css'
import { Text } from '@nextui-org/react'

export const Header = () => {
  const x = 3
  return (
    <>
      <Text
        h1
        size={30}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
          mb: '3rem',
        }}
        weight="bold"
      >
        Crash course - Next UI
      </Text>
      {/* <h1 className="title">
        <span>Crash course</span>
        News
      </h1> */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </>
  )
}

export default Header
