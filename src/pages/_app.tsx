import GlobalStyles from "../styles/global"
import React, { useState } from "react"

import { Header } from "../components/Header"
import { Player } from "../components/Player"

import { Wrapper } from "../styles/pages/app"
import { PlayerContextProvider } from "../contexts/PlayerContext"

// toda pagina ta aqui, quando queremos um componente sempre visivel,
// colocamos aqui, por exemplo o header
function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <GlobalStyles />
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </PlayerContextProvider>
  )
}

export default MyApp
