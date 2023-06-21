import { Container } from './App.styled';
import { CommentsList } from './CommentsList/CommentsList';
import { TextArea } from './TextArea/TextArea';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      axios.defaults.baseURL = 'https://dummyjson.com';

      try {
        const response = await axios.get('/comments');
        if (response.status === 200) {
          setComments(response.data.comments);
          return;
        }

        throw new Error(response.message);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const handleAddComment = ({ userName, commentText }) => {
    setComments(prevState => [
      ...prevState,
      {
        id: nanoid(),
        body: commentText,
        postId: nanoid(),
        user: { id: nanoid(), username: userName },
      },
    ]);
  };

  const handleDeleteComment = ({ id }) => {
    const filteredComments = comments.filter(comment => comment.id !== id);
    setComments(filteredComments);
  };

  return (
    <main>
      <Container>
        <CommentsList
          comments={comments}
          handleDeleteComment={handleDeleteComment}
        />
        <TextArea handleAddComment={handleAddComment} />
      </Container>
    </main>
  );
};
