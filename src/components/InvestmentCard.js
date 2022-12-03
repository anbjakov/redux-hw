import { useSelector, useDispatch } from "react-redux";

import { Card, CardHeader, CardBody,CardFooter } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Alert,AlertIcon,AlertTitle,AlertDescription,} from '@chakra-ui/react'
import {deposit, withdraw, reset} from "../redux/investment/actions";

const InvestmentCard = ()=> {
    const dispatch = useDispatch();
    const {amount, error} = useSelector((state)=>state.investment);

    const handleDeposit = ()=>{
        dispatch(deposit(10));

    }
    const handleWithdraw = ()=>{
    dispatch(withdraw(10));
    }
    const handleReset = ()=>{
        dispatch(reset());
    }
    return (
        <>
            <Card maxW='md'>
                <CardHeader>
                    <Heading size='md'>Investment</Heading>
                </CardHeader>
                <CardBody>
                    <Box>
                        <Text pt='2' fontSize='sm'>{amount}</Text>
                        {error && <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>}
                    </Box>
                </CardBody>
                <CardFooter>
                    <ButtonGroup >
                        <Button onClick = {handleDeposit} variant='solid' colorScheme='blue'>
                          DEPOSIT 10 $
                        </Button>
                        <Button  onClick = {handleWithdraw} variant='solid' colorScheme='blue'>
                           WITHDRAW 10 $
                        </Button>
                        <Button  onClick = {handleReset} variant='solid' colorScheme='blue'>
                            RESET
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            </>
    )
}

export default InvestmentCard