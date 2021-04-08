import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ReactElement } from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import { StyleSheetManager } from 'styled-components'

export { act, fireEvent, waitFor } from '@testing-library/react'

export const renderer = {
  deep: (node: ReactElement) => {
    const r = render(<StyleSheetManager disableVendorPrefixes>{node}</StyleSheetManager>)

    return {
      ...r,
      output: r.container.firstChild,
    }
  },
  hook: <T extends unknown, R extends unknown>(hookFunction: (props: T) => R) => {
    const r = renderHook(hookFunction)

    return r
  },
  shallow: (node: ReactElement) => {
    const r = createRenderer()

    r.render(node)

    return {
      instance: r.getMountedInstance(),
      output: r.getRenderOutput(),
      unmount: r.unmount,
    }
  },
}
