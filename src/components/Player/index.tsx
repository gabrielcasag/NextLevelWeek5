import { Container, Header, Progress, Main, Buttons } from './styles';

export function Player() {
  return (
    <Container>
      <Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </Header>

      {/* empty player */}
      <Main>
        <strong>Selecione um podcast para ouvir!</strong>
      </Main>

      <footer>
        {/* progress */}
        <Progress>
          <span>00:00</span>
          <div />
          <span>00:00</span>
        </Progress>

        {/* botoes */}
        <Buttons>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className="playButton">
            <img src="/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </Buttons>
      </footer>
    </Container>
  )
}
