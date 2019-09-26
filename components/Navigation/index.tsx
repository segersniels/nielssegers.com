import Avatar from '@resources/images/avatar.jpg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';
import { Redirect, Title } from 'styles/defaults';
import {
  Container,
  Description,
  Image,
  Item,
  Job,
  Line,
  Links,
  Row,
  Text,
} from './styles';

interface Props {}

const Landing = (props: Props) => {
  props;

  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Image src={Avatar} />
      </Row>

      <Row>
        <Title gradient={true}>{t('navigation.title')}</Title>
      </Row>

      <Row>
        <Description>
          {t('navigation.description')}
          <Link href={t('navigation.job.link')} passHref>
            <Redirect background={colors.black} color={colors.white}>
              <Job>{t('navigation.job')}</Job>
            </Redirect>
          </Link>
        </Description>
      </Row>

      <Row>
        <Links>
          <Link href="/home" passHref>
            <Item>
              <Text>{t('navigation.home')}</Text>
            </Item>
          </Link>

          <Link href="https://github.com/segersniels" passHref>
            <Item>
              <Text>{t('navigation.projects')}</Text>
            </Item>
          </Link>

          <Link href="https://www.linkedin.com/in/nielssegers/" passHref>
            <Item>
              <Text>{t('navigation.about')}</Text>
            </Item>
          </Link>
        </Links>
      </Row>

      <Line />
    </Container>
  );
};

export default Landing;
