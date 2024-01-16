import { Friend } from "../dto/friend.dto";

const url = "http://localhost:4000";

export const FriendsService = {
  async fetchAllFriends(): Promise<Friend[]> {
    const response = await fetch(`${url}/friends`);
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  },
};
