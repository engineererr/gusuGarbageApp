import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children}) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
  return (
    <div>
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          {data.site.siteMetadata.title}
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/gusucalendar">GusuCalendar</ListLink>
            <ListLink to="/about">About</ListLink>
          </ul>
        </header>
        {children}
      </div>
      <footer
        style={{
          position: `absolute`,
          width: `100%`,
          height: `100px`,
          bottom: `0px`,
          backgroundColor: `green`,
        }}
      >
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
          Copyright by gaggi
        </div>
      </footer>
    </div>
  )
}