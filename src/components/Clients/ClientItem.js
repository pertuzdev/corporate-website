import React from 'react'
import { ClientItemContainer, ClientLink, ClientImg } from './styles'

export default function ClientItem ({ logo }) {
  return (
    <ClientItemContainer>
      <ClientLink>
        <ClientImg src={logo} />
      </ClientLink>
    </ClientItemContainer>
  )
}
