import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css'
import { PlayerContext } from '../../contexts/PlayerContext';

import { Container, Header, Progress, EmptyPlayer, Buttons, PlayingEpisode, EmptySlider, Footer } from './styles';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();

  }, [isPlaying])

  const episode = episodeList[currentEpisodeIndex];

  return (
    <Container>
      <Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </Header>

      {episode ? (
        <PlayingEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </PlayingEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir!</strong>
        </EmptyPlayer >
      )}

      <Footer isEmpty={episode ? false : true}>
        <Progress>
          <span>00:00</span>
          {episode ? (
            <Slider
              trackStyle={{ backgroundColor: '#04d361' }}
              railStyle={{ backgroundColor: '#9f75ff' }}
              handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
            />
          ) : (<EmptySlider />)}
          <span>00:00</span>
        </Progress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => { setPlayingState(true) }}
            onPause={() => { setPlayingState(false) }}
          />
        )}

        <Buttons>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </Buttons>
      </Footer>
    </Container>
  )
}
