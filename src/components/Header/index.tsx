import { Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(): JSX.Element {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			alignItems="center"
		>
			<Logo />

			<SearchBox />

			<Flex alignItems="center" ml="auto">
				<NotificationsNav />
				<Profile />
			</Flex>
		</Flex>
	);
}
