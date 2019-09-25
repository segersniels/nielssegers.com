import Layout from 'components/Layout';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';
import { Container, Redirect, SubTitle } from 'styles/defaults';
import { Item, List } from './styles';

interface Props {}

const Projects = (props: Props) => {
  props;

  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <SubTitle>{t('projects.tools')}</SubTitle>
        <List>
          <Item>
            <Link href="https://github.com/segersniels/supdock-ts" passHref>
              <Redirect color={colors.darkerGrey}>
                supdock (TypeScript)
              </Redirect>
            </Link>
          </Item>
        </List>

        <SubTitle>{t('projects.websites')}</SubTitle>
        <List>
          <Item>
            <Link
              href="https://github.com/segersniels/nielssegers.com"
              passHref
            >
              <Redirect color={colors.darkerGrey}>nielssegers.com</Redirect>
            </Link>
          </Item>
        </List>

        <SubTitle>{t('projects.unmaintained')}</SubTitle>
        <List>
          <Item>
            <Link href="https://github.com/segersniels/supdock" passHref>
              <Redirect color={colors.darkerGrey}>supdock (Golang)</Redirect>
            </Link>
          </Item>

          <Item>
            <Link href="https://github.com/segersniels/slackdo" passHref>
              <Redirect color={colors.darkerGrey}>slackdo</Redirect>
            </Link>
          </Item>

          <Item>
            <Link
              href="https://github.com/segersniels/terraform-ecs-plan-checker"
              passHref
            >
              <Redirect color={colors.darkerGrey}>
                terraform-ecs-plan-checker
              </Redirect>
            </Link>
          </Item>

          <Item>
            <Link href="https://github.com/segersniels/gocreate" passHref>
              <Redirect color={colors.darkerGrey}>gocreate</Redirect>
            </Link>
          </Item>

          <Item>
            <Link
              href="https://github.com/segersniels/aws-custom-slack-notifications"
              passHref
            >
              <Redirect color={colors.darkerGrey}>
                aws-custom-slack-notifications
              </Redirect>
            </Link>
          </Item>
        </List>
      </Container>
    </Layout>
  );
};

export default Projects;
