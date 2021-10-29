import * as React from 'react'
import { Box } from '@chakra-ui/react'

interface FeatureProps {
  title: string
  children: React.ReactNode
}

export const Component = (props: FeatureProps) => {
  const { title, children } = props
  return (
    <Box>
    </Box>
  )
}

