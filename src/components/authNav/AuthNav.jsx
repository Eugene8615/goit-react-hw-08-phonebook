import { Link } from "react-router-dom";
import { Link as ChakraLink, Flex, Spacer } from '@chakra-ui/react'
import { useLocation } from "react-router-dom";

const AuthNav = () => {
    const { pathname } = useLocation()

    return (
        <nav>
            <Flex>
                <ChakraLink mt={1}
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                    color={pathname === '/register' ? "#3db5c5" : "#84cfd9"}
                    as={Link} to="/register">Sign Up</ChakraLink>
                <Spacer mx={3} />
                <ChakraLink mt={1}
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                    color={pathname === '/login' ? "#3db5c5" : "#84cfd9"}
                    as={Link} to="/login">Log In</ChakraLink>
            </Flex>
        </nav >
    )
}

export default AuthNav;