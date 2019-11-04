import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Redirect } from 'styles/defaults';
import { Container, FontAwesomeIcon, Icons } from './styles';

const Landing = () => {
  return (
    <Container>
      <Icons>
        <Link href="https://twitter.com/segersniels_" passHref>
          <Redirect>
            <FontAwesomeIcon icon={faTwitter} />
          </Redirect>
        </Link>
      </Icons>
    </Container>
  );
};

export default withRouter(Landing);
