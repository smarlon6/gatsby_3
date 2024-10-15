import * as React from "react"
import Teste from "../componentes/teste"
import { Link } from "gatsby"
import Layout from "./layout"


export default function IndexPage () {
  return (
    <Layout titulo="Home">
      <h1>Ola Gatsby World!</h1>
      <p>Estamos estudando o Gatby</p>
      <Teste nome = "machado de assis"/>
      <Link to="/about">Sobre</Link>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
