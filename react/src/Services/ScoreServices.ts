import axios from 'axios';
import { toast } from 'react-toastify';

class ScoreService {
  async getScore(playerId: string): Promise<number | null> {
    try {
      const response = await axios.get(`http://localhost:3008/score/${playerId}`);
      return response.data.score;
    } catch (error) {
      console.error('Error fetching score:', error);
      toast.error('Error fetching score');
      return null;
    }
  }
}

export default ScoreService;
