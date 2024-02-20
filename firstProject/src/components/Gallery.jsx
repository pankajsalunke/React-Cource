import { Profile } from './Profile';

export default function Gallery() {
  return (
    <section className='flex justify-end  '>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

