import { Link, Outlet, useLocation } from "react-router-dom"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/auth/authSlice"
import { Link as ChakraLink, Flex, Spacer, Box } from '@chakra-ui/react'
import UserMenu from "components/UserMenu/UserMenu"
import AuthNav from "components/authNav/AuthNav"


const HeaderApp = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const { pathname } = useLocation()
    return (
        <div>
            <Box py={6}>
                <Flex alignItems='center'>
                    <ChakraLink
                        mt={1}
                        fontSize='lg'
                        lineHeight='normal'
                        fontWeight='semibold'
                        color={pathname === '/' ? "#3db5c5" : "#84cfd9"}
                        as={Link}
                        to='/'>Home</ChakraLink>


                    {isLoggedIn &&
                        <ChakraLink
                            mt={1}
                            ml={4}
                            fontSize='lg'
                            lineHeight='normal'
                            fontWeight='semibold'
                            color={pathname === '/contacts' ? "#3db5c5" : "#84cfd9"}
                            as={Link}
                            to="/contacts">Phonebook</ChakraLink>
                    }
                    <Spacer />

                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Flex>
            </Box>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}
export default HeaderApp