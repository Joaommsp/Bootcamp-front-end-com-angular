//generics 

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(["joão, goku"],["vegeta"] )

// numArray.push("saitama") // adicionando string no vetor de array( o problema do ANY)
console.log(numArray)
console.log(stgArray)

