import { DELETE_TEAMPOST } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export const DeletePostButton = ({ post, onDelete }) => {
    const [deleteTeamPost] = useMutation(DELETE_TEAMPOST);
  
    const handleDelete = async () => {
        try {
          const { data } = await deleteTeamPost({ variables: { postId: post._id } });
          
          console.log('Post deleted successfully:', data.deleteTeamPost);
    
          // Call the onDelete callback function to notify the parent component
          // onDelete(post.id);
          window.location.reload();
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };
      
    return <button onClick={handleDelete}>Delete Post</button>;
    
  };
  