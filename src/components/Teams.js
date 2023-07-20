import { useParams } from 'react-router-dom';

export const Teams = () => {

  const { teamId } = useParams();
  
  return (
    <div>
      Viewing details for team {teamId}
    </div>
  )
}
