import { Box } from "@chakra-ui/react";
import Footer from "../Footer";
import React from "react";
import Login from "../../views/Login";


export default function Pages(props) {

  const wrapper = React.createRef();

  React.useEffect(() => {
    document.body.style.overflow = "unset";
    return function cleanup() { };
  });


  const navRef = React.useRef();
  return (
    <Box ref={navRef} w='100%'>
      <Box w='100%'>
        <Box ref={wrapper} w='100%'>
          <Login />
        </Box>
      </Box>
      <Box px='24px' mx='auto' width='1044px' maxW='100%' mt='60px'>
        <Footer />
      </Box>
    </Box>
  );
}
