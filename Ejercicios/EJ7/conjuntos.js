//- Un nuevo Set con los nombres de tu familia
const familia = ['Marisol', 'Giane', 'Nao', 'Pancha'];
const miFamilia = new Set(familia);


//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add('Marisol') 
console.log(miFamilia)


//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add('Javascript') 
console.log(miFamilia)

miFamilia.forEach(obj =>{
    console.log(obj)
})