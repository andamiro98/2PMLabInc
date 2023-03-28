import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <>
      <ProfileBox>
        <Profileimg src="https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png" />
      </ProfileBox>
    </>
  );
};

export default Profile;

const ProfileBox = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  display: flex;
`;

const Profileimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
