const SocialMediaLinks = () => {
  return (
    <div className='fixed pl-4 -left-1 bottom-0 z-10'>
      <a href='https://github.com/1Jama' target='_blank' rel='noreferrer'>
        <svg
          width='24'
          height='24'
          fill='currentColor'
          className='w-6 h-6 mb-4 text-cyan-400 fill-current hover:-translate-y-1 duration-200 hover:text-cyan-200'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
          ></path>
        </svg>
      </a>
      <a
        href='https://www.linkedin.com/in/1jama/'
        target='_blank'
        rel='noreferrer'
      >
        <svg
          className='w-6 h-6 mb-4 text-cyan-400 fill-current hover:-translate-y-1 duration-200 hover:text-cyan-200'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          width='100px'
          height='100px'
        >
          <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
        </svg>
      </a>
      <div className='w-3 h-24 border-r-2 border-solid border-cyan-400'></div>
    </div>
  );
};

export default SocialMediaLinks;
