import { createSignal } from "solid-js";

interface Props{
    funset: number,
}

 function BotonMas(props: Props) {
	const [count, setCount] = createSignal(0);
	return (
		<div class="ml-5">
			<button
				type="button"
				class="text-2x1 border bg-white hover:bg-gray-400 rounded-4xl pl-4 pr-4"
				onclick={() => setCount((v) => v + 1)}
			>
				+
			</button>
		</div>
	);
}
