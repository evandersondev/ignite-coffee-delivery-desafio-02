import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { BaseContainer } from './style'

export function BaseLayout() {
  return (
    <BaseContainer>
      <Header />

      <Outlet />
    </BaseContainer>
  )
}
