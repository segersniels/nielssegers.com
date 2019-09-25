import Source from '@resources/images/avatar.png';
import { Image, Row } from './styles';

interface Props {}

const Avatar = (props: Props) => {
  props;

  return (
    <Row>
      <Image src={Source} />
    </Row>
  );
};

export default Avatar;
