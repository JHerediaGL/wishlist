import React, { Component, ReactNode } from 'react'
import { isMobile } from 'react-device-detect'
import BottomBar from '../BottomBar'
import ListMenuContent from './Content'

interface AddToListProps {
  product: any
  onClose: () => void
  onAddToListsSuccess: () => void
  onAddToListsFail: () => void
}

class AddToList extends Component<AddToListProps, {}> {
  public render(): ReactNode {
    const { onClose } = this.props
    return isMobile ? (
      <BottomBar onOutsideClick={onClose}>
        <ListMenuContent {...this.props} />
      </BottomBar>
    ) : null
  }
}

export default AddToList