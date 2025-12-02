import { pb, type Blog } from './pocketbase';

export const blogService = {
  async getBlogs(limit: number = 3) {
    try {
      const records = await pb.collection("eShasan_Blogs").getList<Blog>(1, limit, {
        sort: "-created",
        requestKey: null,
      });
      return records.items;
    } catch (error) {
      throw error;
    }
  },

  async getBlogById(id: string) {
    try {
      const record = await pb.collection("eShasan_Blogs").getOne<Blog>(id, {
        requestKey: null,
      });
      return record;
    } catch (error) {
      throw error;
    }
  },

  getImageUrl(blog: Blog) {
    return pb.files.getURL(blog, blog.Image);
  }
};