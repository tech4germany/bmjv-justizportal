import * as React from 'react'
import { Box, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react'

interface FeatureProps {
  title: string
  children: React.ReactNode
  icon: React.ReactElement
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Box>
      <Stack spacing={{ base: '4', md: '6' }} direction={{ base: 'column', md: 'row' }} >
        <Box fontSize="6xl" color={mode('green.500', 'green.300')}>{icon}</Box>
        <Stack spacing="1">
          <Heading size="lg">
            {title}
          </Heading>
          <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
        </Stack>
      </Stack>
    </Box>
  )
}

