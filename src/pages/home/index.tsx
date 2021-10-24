import * as React from 'react';

const Data = {
  projectLink: 'https://github.com/ismlhbb/react-ts-tw-starter',
  projectName: 'React + Typescript + Tailwind Starter',
  profileLink: 'https://ismailhabibi.netlify.app',
  profileName: 'Ismail Habibi Herman',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-white'>
      <a href={Data.projectLink}>
        <h1>{Data.projectName}</h1>
      </a>
      <p className='mb-4'>
        By <a href={Data.profileLink}>{Data.profileName}</a>
      </p>
      <div className='mt-8 text-dark'>
        <p className='text-[#ffe347]'>JIT is on</p>
      </div>
      <footer className='absolute text-gray-300 bottom-2'>
        © {new Date().getFullYear()}{' '}
        <a href={Data.profileLink}>{Data.profileName}</a>
      </footer>
    </div>
  );
}
