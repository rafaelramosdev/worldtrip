import { GetStaticPaths, GetStaticProps } from "next"

import Head from "next/head"

import { Box } from "@chakra-ui/react"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentContent } from "../../components/Continent/ContinentContent"

type ContinentObjectBody = {
  about: string;
  countries: number;
  languages: number;
  top_cities: number;
}

type ContinentObjectCity = {
  id: number;
  country_id: number;
  name: string;
  cover: string;
}

type ContinentObject = {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: ContinentObjectBody;
  cover: string;
  cities: ContinentObjectCity[];
}

interface ContinentProps {
  continent: ContinentObject
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.title} | worldtrip</title>
      </Head>

      <Box>
        <Header showBackButton />
        
        <ContinentBanner cover={continent.cover} title={continent.title} />

        <ContinentContent body={continent.body} cities={continent.cities} />
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`/continents/?slug=${slug}`)

  const continent = response.data[0];

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}