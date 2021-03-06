import { ID } from '../common/id';
import { Info } from './info';
import { Gallery } from './gallery';

export interface Profile {
    id: ID;
    info: Info;
    photos: Gallery;
}
