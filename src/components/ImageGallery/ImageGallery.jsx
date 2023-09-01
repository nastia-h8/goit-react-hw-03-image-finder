import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ items }) {
  return (
    <List>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </List>
  );
}
