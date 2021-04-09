// name of function has to be lower case
export default function animalrand(req, res) {
  const animals = [
    'elephant',
    'rhino',
    'cat',
  ]

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)]

  res.status(200).json({ 'randomAnimal': randomAnimal })
}