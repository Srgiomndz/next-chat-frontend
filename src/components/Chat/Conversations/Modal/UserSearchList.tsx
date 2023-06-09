import { SearchedUser } from "@/src/util/types";
import { Flex, Text, Stack, Avatar, Button } from "@chakra-ui/react";

interface UserSearchListProps {

    users: Array<SearchedUser>
    addParticipant: (user: SearchedUser) => void
}

const userSearchList: React.FC<UserSearchListProps> = ({ users, addParticipant }) => {
    return (
        <>
            {users.length === 0 ? (
                <Flex mt={6} justify='center' >
                    <Text>No users found</Text>
                </Flex>
            ) : (
                <Stack mt={6}>
                    {users.map(user => (
                        <Stack  key={user.username} direction='row' align='center' spacing={4} py={2} px={4} borderRadius={4} _hover={{ bg: "whiteAlpha.200" }} >
                            <Avatar />
                            <Flex justify='space-between' width='100%' align='center'>
                                <Text color='whiteAlpha.700'>{user.username}</Text>
                                <Button bg='brand.100' _hover={{ bg: "brand.100" }} onClick={() => addParticipant(user) }>
                                    Select
                                </Button>

                            </Flex>
                        </Stack>
                    ))}
                </Stack>
            )}
        </>

    )

};

export default userSearchList
