import React from 'react';
import {
    Container,
    Center,
    Text,
    GridItem,
    Grid,
    Card,
    CardBody,
    Image,
    Stack,
    Heading
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';

const Contact = ({books}) => {
  return (
    <Container className='loa' maxW="8xl" paddingLeft="8">
    <Grid templateColumns="repeat(3, 1fr)" gap={6} marginBottom={4}>
      {books &&
        books.map((book) => (
          <GridItem w="100%" key={book.id}>
            <Card h={360}>
              <CardBody>
                <Center>
                  <Image
                    h={200}
                    w={140}
                    src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      'https://media.istockphoto.com/id/1132987502/tr/vekt%C3%B6r/vekt%C3%B6r-ger%C3%A7ek%C3%A7i-bo%C5%9F-kitap-kapa%C4%9F%C4%B1-%C3%BCst-g%C3%B6r%C3%BCn%C3%BCm-yal%C4%B1t%C4%B1lm%C4%B1%C5%9F.jpg?s=170667a&w=0&k=20&c=o7q9Yrn1hoZmUPXvf9qssdoljtgz-zfkM2Z7Gz-nCzw='
                    }
                    alt={book.volumeInfo.title}
                    borderRadius="md"
                  />
                </Center>
                <Stack mt="6" spacing="3">
                  <Center>
                    <Heading size="xs">{book.volumeInfo.title}</Heading>
                  </Center>
                  <Center mt="5">
                    <Text fontSize="xs">
                      {book.volumeInfo.authors?.join(', ')}
                    </Text>
                  </Center>
                  <Center>
                  <Link  to={`book/${book.id}`} variant="link" colorScheme="blue" fontSize="xs">
                    Detail
                  </Link>
                  </Center>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  </Container>
  )
}

export default Contact
