import React from 'react';
import Image from 'next/image';

const ProfileImage = () => (
  <Image
    src="/profile.jpg"
    alt="Profile"
    width={128}
    height={128}
    className="rounded-full"
  />
);

export default ProfileImage; 