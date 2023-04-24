import { useSelector } from "react-redux"
import { getUserName } from "redux/auth/authSlice"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { Button } from '@chakra-ui/react'
import { ImExit } from 'react-icons/im'
import { Flex, Spacer, Text } from "@chakra-ui/react"
import Rick from "images/Rick-avatar.png"


const UserMenu = () => {
    const userName = useSelector(getUserName)
    const dispatch = useDispatch()
    return (
        <Flex alignItems='center'>
            <Text as='b' color='#3db5c5' mt={2}>{userName}</Text>
<img src={Rick} width={50} height={50} alt="Rick" />


            <Spacer ml={6} />

            <Button color="#3db5c5" size='sm' rightIcon={<ImExit />} type="button" onClick={() => dispatch(logOut())}>Logout</Button>
        </Flex>
    )
}
export default UserMenu
