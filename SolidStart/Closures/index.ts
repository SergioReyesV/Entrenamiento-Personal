function hola() {
    let mensage = "hola"
    return {
        get() {
            console.log(mensage);
        },

        set(valor: string) {
            mensage = valor;
        }
    }
}

const {get, set} = hola();

get();
set("HOLAAAAAAAAAA")
get();