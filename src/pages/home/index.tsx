import * as React from 'react';
import { useHistory } from 'react-router';
import Button from 'components/buttons/Button';

const Data = {
  projectLink: 'https://github.com/ismlhbb/react-ts-tw-starter',
  projectName: 'React + Typescript + Tailwind Starter',
  profileLink: 'https://ismailhabibi.netlify.app',
  profileName: 'Ismail Habibi Herman',
};

export default function Home() {
  const history = useHistory();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <a href={Data.projectLink}>
        <h1>{Data.projectName}</h1>
      </a>
      <p className='mb-4'>
        By <a href={Data.profileLink}>{Data.profileName}</a>
      </p>
      <p className='mb-4'>
        <Button
          className='mt-4'
          variant='light'
          onClick={() => history.push('/counter')}
        >
          Counter Page
        </Button>
      </p>
      <p className='mb-4'>
        <Button
          className='mt-4'
          variant='light'
          onClick={() => history.push('/example')}
        >
          Example Page
        </Button>
      </p>
      <footer className='absolute text-gray-300 bottom-2'>
        © {new Date().getFullYear()}{' '}
        <a href={Data.profileLink}>{Data.profileName}</a>
      </footer>
    </div>
  );
}
