'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_PRIMARY, TITLE } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, size, ...rest }) => {
  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#000'}
      iconStyle={{
        marginLeft: '10%',
        marginTop: '5%',
      }}
      size={size}
      {...rest}
    />
  );
});

export default Avatar;
