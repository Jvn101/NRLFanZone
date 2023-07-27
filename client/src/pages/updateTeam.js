import { UPDATE_TEAMPOST } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';



//updateTeamPost

export const UpdatePostForm = ({ post }) => {
  console.log(post);
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
  
    const [updateTeamPost] = useMutation(UPDATE_TEAMPOST);
    
    const handleUpdate = async () => {
      try {
        const { data } = await updateTeamPost({
          variables: { postId: post._id, title, description, teamId: post.teamId },
        });
  
        // Handle the response (e.g., display success message)
        console.log('Post updated successfully:', data.updateTeamPost);
        window.location.reload();
        // You can update the post in the UI if needed
        // ...
      } catch (error) {
        // Handle errors (e.g., display error message)
        console.error('Error updating post:', error);
      }
    };
  

    return (
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleUpdate}>Update Post</button>
        </div>
      );
    };