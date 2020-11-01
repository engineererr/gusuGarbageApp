import React from "react"
import Layout from "../components/layout"
import { Title, Wrapper } from "../components/titleComponents"

export default function Home( {data } ) {
  return (
    <Layout>
      <Wrapper>
        <Title>
          Welcome
        </Title>
      </Wrapper>
    </Layout>
  )
}

