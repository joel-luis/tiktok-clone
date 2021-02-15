import Layout from '../components/Layout';
import Feed from '../components/Feed';
// import Suggestions from '../components/Suggestions';

function Index({ posts = [] }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      {/* <Suggestions></Suggestions> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          'https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f',
        name: 'Joel Luis',
        username: 'joelluis',
      },
      description: 'descrição',
      tags: [{ title: '#clonetiktok' }, { title: '#nextjs' }],
      songName: 'black-PearJam',
      videourl: 'video',
      likes: 881,
      comments: 10,
      replies: 20,
    },
    {
      id: 2,
      author: {
        id: 2,
        avatar:
          'https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f',
        name: 'Joel Luis',
        username: 'joelluis',
      },
      description: 'descrição 2',
      tags: [{ title: '#clonetiktok' }, { title: '#nextjs' }],
      songName: 'Sirens-PearJam',
      videourl: 'video2',
      likes: 881,
      comments: 10,
      replies: 20,
    },
  ];
  return {
    props: {
      posts: data,
    }, // will be passed to the page component as props
  };
}

export default Index;
