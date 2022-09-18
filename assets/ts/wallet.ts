import Loader from './loader'

export async function testLoader() {
  await Loader.load()
  console.log(Loader.Cardano)
}
