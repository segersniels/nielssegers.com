import admin from './admin';
import form from './form';
import list from './list';
import navigation from './navigation';
import projects from './projects';

export default {
  ...navigation,
  ...admin,
  ...form,
  ...list,
  ...projects,
};
