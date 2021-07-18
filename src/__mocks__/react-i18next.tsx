// ref: https://gist.github.com/LauraBeatris/b41e6ee76af9a56d6dd25873bbe4cecf
import React from 'react'
import reactI18next from 'react-i18next'

/*
  Also, if you're changing the language, add that mock function before your test suit
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: key => key,
      i18n: { changeLanguage: jest.fn() },
    }),
  }));
*/

const hasChildren = (node: any) => node && (node.children || (node.props && node.props.children))

const getChildren = (node: any) => (node && node.children ? node.children : node.props && node.props.children)

const renderNodes: any = (reactNodes: any) => {
  if (typeof reactNodes === 'string') {
    return reactNodes
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key]
    const isElement = React.isValidElement(child)

    if (typeof child === 'string') {
      return child
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child))
      return React.cloneElement(child, { ...child.props, key: `${i + 1}` }, inner)
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '')
    }

    return child
  })
}

const useMock: any = [(k: any) => k, {}]

useMock.t = (k: any) => k
useMock.i18n = {}

module.exports = {
  ...reactI18next,
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: any) => (props: object) => <Component t={(k: any) => k} {...props} />,
  Trans: ({ children }: any) => renderNodes(children),
  Translation: ({ children }: any) => children((k: any) => k, { i18n: {} }),
  useTranslation: () => useMock,
}
