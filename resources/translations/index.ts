import admin from './admin';
import form from './form';
import post from './post';
import navigation from './navigation';
import projects from './projects';

export default {
  ...navigation,
  ...admin,
  ...form,
  ...post,
  ...projects,
};
