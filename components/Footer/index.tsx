import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Redirect } from 'styles/defaults';
import { Container, FontAwesomeIcon, Icons } from './styles';

interface Props {}

const Landing = (props: Props) => {
  props;

  return (
    <Container>
      <Icons>
        <Link href="https://twitter.com/segersniels_" passHref>
          <Redirect>
            <FontAwesomeIcon icon={faTwitter} />
          </Redirect>
        </Link>
      </Icons>

      {/* <Link href="https://www.linkedin.com/in/nielssegers/" passHref>
        <Redirect>
          <FontAwesomeIcon icon={faLinkedin} size="sm" />
        </Redirect>
      </Link> */}

      {/* <Link href="https://github.com/segersniels" passHref>
        <Redirect>
          <FontAwesomeIcon icon={faGithub} />
        </Redirect>
      </Link> */}
    </Container>
  );
};

export default withRouter(Landing);
