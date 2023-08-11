const compare = () => {
  const first = Number(document.getElementById('first').value)
  const second = Number(document.getElementById('second').value)
  const operator = document.getElementById('operator').value

  let comparator

  switch (operator) {
    case 'maior':
      comparator = first > second
      break
    case 'menor':
      comparator = first < second
      break
    case 'maiorIg':
      comparator = first >= second
      break
    case 'menorIg':
      comparator = first <= second
      break
    case 'ig':
      comparator = first == second
      break
    case 'dif':
      comparator = first != second
      break

    default:
      break
  }

  document.getElementById('result').value = comparator
}

const toReplace = () => {
  const first = Number(document.getElementById('first').value)
  const second = Number(document.getElementById('second').value)

  document.getElementById('first').value = second
  document.getElementById('second').value = first
}
