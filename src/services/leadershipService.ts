// import { pb, type Leader } from './pocketbase';

// export const leadershipService = {
//   async getLeaders() {
//     try {
//       const records = await pb.collection("eShasan_leadership").getList<Leader>(1, 50, {
//         sort: "created",
//         requestKey: null,
//       });
//       return records.items;
//     } catch (error) {
//       console.error("Error fetching leaders:", error);
//       throw error;
//     }
//   },

//   getImageUrl(leader: Leader) {
//     return pb.files.getURL(leader, leader.Image);
//   }
// };