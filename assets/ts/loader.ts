import CardanoSerializationLibrary from '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib'

class Loader {
  _wasm: typeof CardanoSerializationLibrary | undefined

  async load() {
    if (this._wasm) return
    this._wasm = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib')
  }

  get Cardano() {
    return this._wasm
  }
}

export default new Loader()
