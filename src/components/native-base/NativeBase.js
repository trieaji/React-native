import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function NativeBase() {
  return(

    <Box>
      <Heading color="primary.900">
        Welcome
      </Heading>  

      <Heading color="primary.600" size="lg">
        Sign in to continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl.Label _text={{color: 'primary.800', fontWeight: 'bold', fontSize: 'sm'}}>
          Email
        </FormControl.Label>
        <Input />
        <FormControl.Label _text={{color: 'primary.800', fontWeight: 'bold', fontSize: 'sm'}}>
          Password
        </FormControl.Label>
        <Input type="password" />

        <Link mt={2} _text={{fontSize: 'xs', fontWeight:'700', color:'primary.600'}}>
          Forgot Password?
        </Link>

      </VStack>

      <VStack colorSchema="primary" mt={5} _text={{color: 'white'}}>
        <Button>Login</Button>
      </VStack>


    </Box>

  )
}