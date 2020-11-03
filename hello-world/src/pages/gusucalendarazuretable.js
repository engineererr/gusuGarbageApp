import React from "react"
import Layout from "../components/layout"

export default function GusuCalendarAzureTable({ data }) {
  return (
    <Layout>
      <h1>GusuTableAzureStorage</h1>
      <h4>{data.allGusuEntities.totalCount} Posts</h4>
        {data.allGusuEntities.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.dayOfWeek}</h3>
            <h3>{node.weeklySchedule}</h3>
            <h3>{node.type}</h3>
          </div>
        ))}
      </Layout>
    )
}

export const query = graphql`
  query {
    allGusuEntities {
      totalCount
      edges {
        node {
          dayOfWeek
          id
          weeklySchedule
          type
        }
      }
    }
  }
`