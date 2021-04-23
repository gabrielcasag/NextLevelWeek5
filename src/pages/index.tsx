import { GetStaticProps } from "next";
import { api } from "../services/api";

type Episode = {
  id: string,
  title: string,
  members: string,
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {

  return (
    <>
      <h1>index</h1>
      <p>{JSON.stringify(props)}</p>
    </>)
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc"
    }
  });
  const data = response.data;

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // 8 hrs (tempo em segundos para pagina ser regerada)
  }
}