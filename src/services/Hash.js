class Hasher {
    constructor()
    {
        const importObject = { imports: { imported_func: (arg) => console.log(arg) } };
        fetch("./src/hasher.wasm")
          .then((response) => response.arrayBuffer())
          .then((bytes) => WebAssembly.instantiate(bytes, importObject))
          .then((results) => {
            this.hash = results.instance.exports.exported_func();
          });
                
    }

    encrypt(token)
    {
        return this.hash(token, true);
    }

    decrypt(token)
    {
        return this.hash(token, false);
    }
}

export default Hasher;