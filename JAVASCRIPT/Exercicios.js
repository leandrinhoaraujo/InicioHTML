// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let nota = 0

function getNota(nota) {
  if (nota >= 90) {
    nota = 'A'
  } else if (nota >= 80 && nota <= 89) {
    nota = 'B'
  } else if (nota >= 70 && nota <= 79) {
    nota = 'C'
  } else if (nota >= 60 && nota <= 69) {
    nota = 'D'
  } else {
    nota = 'F'
  }

  return nota
}

console.log('sua nota é: ' + getNota(90))

//__________________________________________________________________
// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e
// despesas e irá mostrar uma mensagem se a família está com
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
  incomes: [100.15, 200.54, 300.36, 4000.51],
  expenses: [500.54, 600.45, 700.36, 800.78]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses
  if (total < 0) {
    console.log('Seu saldo está negativo: ' + total.toFixed(2))
  } else {
    console.log('Seu saldo está positivo: ' + total.toFixed(2))
  }
}

calculateBalance()

//____________________________________________________________________________
// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra
//     C = (F - 32) * 5/9
//     F = C * 9/5 + 32

//transformDegree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  //transformDegree('50X')
} catch (error) {
  console.log(error)
}

//____________________________________________________________________________
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory) {
  console.log('total de livros da categoria', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('total de autores: ', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (book of category.books) {
      if (authors.indexOf(book.author) === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}:  ${books.join(', ')}`)
}

booksOfAuthor('Augusto Cury')
