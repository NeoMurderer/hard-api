import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Blog} from '../models';
import {inject} from '@loopback/core';

export class BlogRepository extends DefaultCrudRepository<Blog, typeof Blog.prototype.id> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Blog, datasource);
  }
}
