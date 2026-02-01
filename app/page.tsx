'use client'

import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { css } from '../styled-system/css'

export default function Home() {
  return (
    <Box
      className={css({
        minH: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <VStack gap={6}>
        <Heading as='h1' size='4xl'>
          くしくし話
        </Heading>
        <Text fontSize='xl' color='gray.500'>
          Chakra UI v3 + Panda CSS で構築中...
        </Text>
        <Button colorPalette='teal' size='lg'>
          はじめる
        </Button>
      </VStack>
    </Box>
  )
}
