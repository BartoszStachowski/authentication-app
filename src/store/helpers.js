import { mapGetters } from 'vuex';

// eslint-disable-next-line import/prefer-default-export
export const authComputed = {
  ...mapGetters(['loggedIn']),
};
