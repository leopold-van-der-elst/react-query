import { useQuery } from "react-query";
import { FriendsService } from "../services/Friends.service";
import { Friend } from "../dto/friend.dto";

export const useFriends = (config?: any) => {
  return useQuery<Friend[], Error>("friends", FriendsService.fetchAllFriends);
};
