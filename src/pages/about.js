import * as React from "react"
import Layout from "./layout"

export default function About () {
  return (
    <Layout titulo = "Sobre" >
      <p>Estamos estundo o Gatsby</p>
    </Layout>
  )
}

export const Head = () => <title>Sobre</title>
