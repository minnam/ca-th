import { useEffect, useState } from 'react'
import { css } from '@emotion/react'

class ModalStack {
  count = 0
  self = null
  storage = []
  components = {}

  setComponents = (components) => {
    this.components = components
  }

  add = (name, component) => {
    this.components[name] = component
  }

  push = (dialog) => {
    this.storage[this.count + 1] = dialog
    this.count++

    this.self((prev) => ({ ...prev, ...this }))
  }

  pop = () => {
    delete this.storage[this.count]

    this.count--

    if (this.count < 0) {
      this.count = 0
    }

    this.self((prev) => ({ ...prev, ...this }))
  }

  update = (props) => {
    this.storage[this.count].props = {
      ...this.storage[this.count].props,
      ...props,
    }

    this.self(this)
  }

  size = () => this.count

  render = () => {
    const [self, $self] = useState(this)
    this.self = $self

    useEffect(() => {
      if (self.count > 0) {
        document.documentElement.style.touchAction = 'none'
        document.body.style.touchAction = 'none'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.touchAction = ''
        document.body.style.touchAction = ''
        document.body.style.overflow = ''
      }
    }, [self])

    useEffect(() => {
      window.addEventListener('resize', this.pop)

      return () => {
        window.removeEventListener('resize', this.pop)
      }
    }, [])

    const handleContentClick = (event) => {
      event.stopPropagation()
    }

    return self.storage.map((dialog, key) => {
      const { type, componentProps } = dialog
      const Component = this.components[type]

      return (
        <div
          key={key}
          css={css(`
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.2);
            width: 100%;
            height: 100%;
            z-index: 1;
          `)}
          onClick={() => {
            this.pop()
          }}
        >
          <div>
            <Component
              key={key}
              {...componentProps}
              level={key - 1}
              handleContentClick={handleContentClick}
              pop={self.pop}
            />
          </div>
        </div>
      )

    })

  }
}

export const Modal = new ModalStack()
