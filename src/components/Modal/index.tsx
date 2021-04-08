import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/Layout/Flex'
import { CreatePage } from '~/components/Page/Create' // eslint-disable-line import/no-cycle
import { colors } from '~/constants/colors'

export type Props = {
  index: number
  open: boolean
  onClose: () => void
}

const Overlay = styled(Flex)<Pick<Props, 'index'>>`
  background-color: rgba(0, 0, 0, ${({ index }) => 0.4 - 0.4 * (index / 10)});
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: ${({ index }) => 100 + index};
`

const OverlayContent = styled(Flex)<Pick<Props, 'index'>>`
  background-color: ${colors.white};
  border-left: 1px solid ${colors.gray300};
  height: 100%;
  left: ${({ index }) => 60 * index}px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: ${({ index }) => 101 + index};
`

export const Modal = ({ index, open, onClose }: Props) => {
  if (!open) {
    return null
  }

  return (
    <>
      <Overlay as="section" index={index} onClick={onClose} />

      <OverlayContent background="white" grow={1} index={index} p={16} shrink={1}>
        <Flex align="flex-start" pb={16}>
          <Button onClick={onClose} type="button">
            Close
          </Button>
        </Flex>
        <CreatePage index={index} onCreated={onClose} />
      </OverlayContent>
    </>
  )
}
