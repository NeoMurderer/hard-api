import {model, property, Entity} from '@loopback/repository';

@model()
export class Blog  extends Entity {
    @property({
        type: 'number',
        id: true,
      })
      id?: number;
    
      @property({
        type: 'string',
        required: true,
      })
      name: string;
    
      @property({
        type: 'boolean',
      })
      isVisible: boolean;
    
      getId() {
        return this.id;
      }
}