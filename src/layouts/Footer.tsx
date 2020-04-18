import React from 'react'
import { Layout, Anchor } from 'antd'
const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <Anchor>
        <Anchor.Link
          title="https://github.com/nik0145/turbo-giggle"
          target="_blank"
          href="https://github.com/nik0145/turbo-giggle"
        ></Anchor.Link>
      </Anchor>
    </Layout.Footer>
  )
}

export default Footer
