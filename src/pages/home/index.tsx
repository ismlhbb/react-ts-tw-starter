import * as React from 'react';
import { useHistory } from 'react-router';
import CustomLink from 'components/links/CustomLink';
import ButtonLink from 'components/links/ButtonLink';

const Data = {
  projectLink: 'https://github.com/ismlhbb/react-ts-tw-starter',
  projectName: 'React + Typescript + Tailwind + Redux Starter',
  profileLink: 'https://ismailhabibi.netlify.app',
  profileName: 'Ismail Habibi Herman',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-main'>
      <h1>{Data.projectName}</h1>
      <p className='mt-2 text-sm text-gray-700'>
        🔥 An opinionated React + Typescript + Tailwind + Redux Starter.
      </p>
      <p className='mt-2 text-sm text-gray-800'>
        <CustomLink to={Data.projectLink}>See the repository</CustomLink>
      </p>

      <ButtonLink className='mt-6' to='/counter' variant='light'>
        Counter example
      </ButtonLink>
      <ButtonLink className='mt-2' to='/example' variant='light'>
        Fetch example
      </ButtonLink>

      <footer className='absolute text-gray-600 bottom-2'>
        © {new Date().getFullYear()} By{' '}
        <CustomLink to={Data.profileLink}>{Data.profileName}</CustomLink>
      </footer>
    </div>
  );
}
