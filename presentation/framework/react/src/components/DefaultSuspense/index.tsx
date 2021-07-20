import React, { Suspense } from 'react'
import { DefaultSuspenseFallback } from '~/components/DefaultSuspenseFallback'

export const DefaultSuspense: React.FC = ({ children }) => (
  <Suspense fallback={<DefaultSuspenseFallback />}>{children}</Suspense>
)
