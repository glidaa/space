import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    type: 'user',
  },
};

// eslint-disable-next-line react/prop-types
const Base = ({ src, ...props }) => (
  <div>
    <Avatar isLoading {...props} />
    <Avatar username="Michael Castleman" {...props} />
    <Avatar
      username="Michael Castleman"
      src={src || 'https://avatars2.githubusercontent.com/u/132554'}
      {...props}
    />
  </div>
);

export const Large = () => <Base size="large" />;

export const Medium = () => <Base />;

export const Small = () => <Base size="small" />;

export const Tiny = () => <Base size="tiny" />;

export const Organization = () => (
  <Base type="organization" username="Chromatic" src="/chromatic-logo-square.png" />
);
