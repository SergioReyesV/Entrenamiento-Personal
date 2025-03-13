import { mergeProps } from "solid-js";

interface Props {
	name: string;
	edad?: number;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	view: any;
	fun: () => string;
}

export function MyComponentName(props: Props) {
	const View = props.view;
	return (
		<div>
			Hello {props.name} y edad {props?.edad} <View /> {props.fun()}
		</div>
	);
}

interface Props2 {
	nombre?: string;
}

export function MyComponentName2(props: Props2) {
	// Using mergeProps to set default values for props
	const finalProps = Object.assign({ defaultName: "Ryan Carniato" }, props);
	const finalProps2 = mergeProps({ defaultName: "Ryan Carniato" }, props);

	return (
		<>
			<div>
				Pierde la reactividada {finalProps.defaultName} {finalProps.nombre}
			</div>
			<div>
				Conserva la reactividada {finalProps2.defaultName} {props.nombre}
			</div>
		</>
	);
}
