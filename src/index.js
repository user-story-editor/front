import _ from 'lodash'

function component () {
  const element = document.createElement('div')

  console.log("Hello!!")
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ')

  return element
}



document.body.appendChild(component())
