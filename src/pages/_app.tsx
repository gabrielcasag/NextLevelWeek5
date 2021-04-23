import GlobalStyles from "../styles/global"
import React from "react"

import { Header } from "../components/Header"
import { Player } from "../components/Player"

import { Wrapper } from "../styles/pages/app"

// toda pagina ta aqui, quando queremos um componente sempre visivel,
// colocamos aqui, por exemplo o header
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </>
  )
}

export default MyApp
