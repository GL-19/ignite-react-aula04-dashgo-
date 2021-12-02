import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Glauber Loiola</Text>
					<Text color="gray.300" fontSize="small">
						glauber-email@gmail.com
					</Text>
				</Box>
			)}

			<Avatar size="md" name="Glauber Loiola" src="https://github.com/GL-19.png" />
		</Flex>
	);
}
