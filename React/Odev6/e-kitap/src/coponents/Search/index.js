import React, { useState } from 'react';
import {
    FormControl,
    Input,
    Button,
    HStack,
    Box,
    Container,
    Spinner
  } from '@chakra-ui/react';
  import { Search2Icon } from '@chakra-ui/icons'
  import axios from 'axios';
import Contact from '../Contact';


const Search = () => {
    const [bookName,setbokkName]=useState('');
    const [books,setBooks]=useState([]);
    const[loa,setLoa]=useState(true);
    function handleChange(e){
            console.log(e.target.value);
            
            setbokkName(e.target.value);
    }
    function formSubmit(e){
        e.preventDefault();
        axios(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`).then((res)=>{
            setBooks(res.data.items)
            console.log(books);
        })
        .catch((e)=>console.log(e))
        .finally(()=>setLoa(false));
        
    }
    return (
        <>
        <Container className='srchinput'>
        <form onSubmit={formSubmit}>
          <HStack spacing="25px">
            <FormControl>
              <Box w="400px" h="25px">
                <Input
                  outline="none"
                  bg="white"
                  value={bookName}
                  onChange={handleChange}
                  placeholder="book title or author"
                />
              </Box>
            </FormControl>
            <Box>
              <Button mt={4} colorScheme="gray" type="submit">
                <Search2Icon />
              </Button>
            </Box>
          </HStack>
        </form>
      </Container>
      {loa && <p className='loa'><Spinner /></p>} 
      <Contact books={books}></Contact>
       </>
    )
}

export default Search
