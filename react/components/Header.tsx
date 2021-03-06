import React, { Component, ReactNode } from 'react'
import { IconCaretLeft, IconClose, IconPlusLines } from 'vtex.styleguide'

interface HeaderProps {
  title?: any
  onClose: () => void
  action?: () => void
  showIconBack?: boolean
  children?: ReactNode
}

class Header extends Component<HeaderProps, {}> {
  public render(): ReactNode {
    const { title, onClose, action, children, showIconBack } = this.props
    return (
      <div className="flex flex-row pa4 items-center bb bt b--muted-4">
        <div className="flex items-center pointer" onClick={onClose}>
          {showIconBack ? (
            <IconCaretLeft size={20} />
          ) : (
              <IconClose size={23} />
            )}
        </div>
        <span className="t-heading-6 w-100 mh5 flex justify-center">
          {title}
        </span>
        {children}
        {action && (
          <div
            className="flex items-center pointer"
            onClick={action}
          >
            <IconPlusLines size={20} />
          </div>
        )}
      </div>
    )
  }
}

export default Header