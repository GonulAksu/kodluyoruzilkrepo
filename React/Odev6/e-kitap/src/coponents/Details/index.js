import React, { useEffect, useState } from 'react';
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  Container,
  Image,
  Center,
  Box
} from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  // useparam is used to access the id information from the link.
  let { bookId } = useParams();

  const [book, setBook] = useState()

  useEffect(() => {
    axios(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => setBook(res.data))
      .catch((e) => console.log(e))

  });
  return (
    <Container maxW="xl" marginBottom={4}>
      <Center h="150px" color="Black">
        <Text fontSize="4xl" mt="10">
          Search Detail
        </Text>
      </Center>
      {book &&

        <Card
          boxShadow='dark-lg' p='6'
          overflow="hidden"
          variant="outline"
        ><Stack>
            <CardBody>
              <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8} my={4} >
                <Link m={4} to="/">
                  <ArrowLeftIcon />
                </Link>
              </Box>

              <Heading align={'center'} size="md">{book.volumeInfo.title}</Heading>

              <Text align={'center'} py="2">{book.volumeInfo.authors?.join(', ')}</Text>
              <Center>
                <Image
                  h={300}
                  w={240}
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    'https://media.istockphoto.com/id/1132987502/tr/vekt%C3%B6r/vekt%C3%B6r-ger%C3%A7ek%C3%A7i-bo%C5%9F-kitap-kapa%C4%9F%C4%B1-%C3%BCst-g%C3%B6r%C3%BCn%C3%BCm-yal%C4%B1t%C4%B1lm%C4%B1%C5%9F.jpg?s=170667a&w=0&k=20&c=o7q9Yrn1hoZmUPXvf9qssdoljtgz-zfkM2Z7Gz-nCzw='
                  }
                  alt={book.volumeInfo.title}
                  borderRadius="sm"
                />
              </Center>
              <Text align={'center'} py="2">
                <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
              </Text>
              <Text align={'center'} py="2">{book.volumeInfo.publishedDate}</Text>
            </CardBody>
          </Stack>

        </Card>
      }
    </Container>
  )
}

export default Details
