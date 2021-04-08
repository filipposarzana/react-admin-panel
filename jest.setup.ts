import { configure } from '@testing-library/dom'

configure({ testIdAttribute: 'data-test-id' })

window.alert = jest.fn()
window.confirm = jest.fn()
