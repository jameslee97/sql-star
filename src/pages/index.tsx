import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '../components/Header/Header'
import { Button } from '@chakra-ui/react'
import { Page } from '../components/Page/Page'
import { Text } from '@chakra-ui/react'
const Home: NextPage = () => {
  return (
    <Page>

      <Text>
      "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
      </Text>
    </Page>
  )
}

export default Home
