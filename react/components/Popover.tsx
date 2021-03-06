import React, { Component, ReactNode } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import wishList from '../wishList.css'

interface PopoverProps {
  onOutsideClick: () => void
  children?: ReactNode
}

class Popover extends Component<PopoverProps, {}> {
  public render(): ReactNode {
    const { children, onOutsideClick } = this.props
    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div className={`${wishList.popover} absolute z-4 right-0`}>
            {children}
        </div>
      </OutsideClickHandler>
    )
  }
}

export default Popover