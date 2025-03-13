
interface Props{
    funget: string,
    funset: (value: string) => void,
}

export function NombreInput(props: Props){
    
    return(
        <div>
            <h1>
                Ingresa tu nombre...
            </h1>
            <input class="border-2 mb-4" type="text" placeholder="Nombre" onInput={(e)=> {props.funset(e.target.value)}} />
            <p>{props.funget}</p>
        </div>
    )
}