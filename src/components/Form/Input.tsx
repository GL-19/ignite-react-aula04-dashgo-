import {
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error = null, ...rest },
	ref
): JSX.Element => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && (
				<FormLabel htmlFor={name} id={name + label}>
					{label}
				</FormLabel>
			)}
			<ChakraInput
				name={name}
				id={name}
				focusBorderColor="pink.500"
				bgColor="gray.900"
				variant="filled"
				_hover={{
					bgColor: "gray.900",
				}}
				size="lg"
				ref={ref}
				{...rest}
			/>

			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
