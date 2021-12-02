import { Stack, Box } from "@chakra-ui/react";
import { Paginationitem } from "./PaginationItem";

export function Pagination() {
	return (
		<Stack direction="row" spacing="6" mt="8" justify="space-between" align="center">
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>

			<Stack direction="row" spacing="2">
				<Paginationitem number={1} isCurrent />
				<Paginationitem number={2} />
				<Paginationitem number={3} />
				<Paginationitem number={4} />
				<Paginationitem number={5} />
				<Paginationitem number={6} />
			</Stack>
		</Stack>
	);
}
