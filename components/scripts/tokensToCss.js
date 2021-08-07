const fs = require('fs')
const { choices, decisions } = require('../tokens/tokens')

const toKebabCase = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

const transformTokens = (parentKey, object) => {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]

    if (Array.isArray(value)) {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`

      return `${tokensTransformed}\n\t--${toKebabCase(
        customProperty
      )}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      const customProperty = parentKey ? `${parentKey}-${objectKey}` : objectKey

      return `${tokensTransformed}\n\t${transformTokens(
        `${toKebabCase(customProperty)}`,
        value
      )}`
    }
    return `${tokensTransformed}\n\t--${parentKey}-${toKebabCase(
      objectKey
    )}: ${value};`
  }, '')
}

const tokensToCss = () => {
  const choicesStr = transformTokens(null, choices)
  const decisionsStr = transformTokens(null, decisions)

  const customProperties = `${choicesStr} ${decisionsStr}`

  const data = [':root {', customProperties.trim(), '}'].join(`\n`)

  fs.writeFile('./src/components/tokens/tokens.css', data, 'utf8', (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

tokensToCss()
