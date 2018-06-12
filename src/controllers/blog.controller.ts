import { get, param, requestBody, post, patch, del } from "@loopback/rest";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { Blog } from '../models/Blog';
import { repository } from "@loopback/repository";
import { BlogRepository } from "../repositories";


export class BlogController {
  constructor(
    @repository(BlogRepository) protected blogRepo: BlogRepository,
  ) {}

  @post('/blogs')
  async createBlog(@requestBody() blog: Blog): Promise<Blog> {
    return await this.blogRepo.create(blog);
  }
  @get('/blogs')
  async findBlogs(): Promise<Blog[]> {
    return await this.blogRepo.find();
  }
  @get('/blogs/{id}')
  async findBlogById(@param.path.number('id') id: number): Promise<Blog> {
    return await this.blogRepo.findById(id);
  }
  @patch('/blogs/{id}')
  async updateBlog(
    @param.path.number('id') id: number,
    @requestBody() blog: Blog,
  ): Promise<boolean> {
    id = +id;
    return await this.blogRepo.updateById(id, blog);
  }
  @del('/blogs/{id}')
  async deleteBlog(@param.path.number('id') id: number): Promise<boolean> {
    return await this.blogRepo.deleteById(id);
  }
}
