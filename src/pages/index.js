import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
import { openDB } from '../lib/openDB';

function Index({ posts = [] }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();
  // const data = [
  //   {
  //     id: 1,
  //     author: {
  //       id: 1,
  //       avatar:
  //         'https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f',
  //       name: 'Joel Luis',
  //       username: 'joelluis',
  //     },
  //     description: '“Hard to Imagine” - AOL Live Sessions, 2006.',
  //     tags: [{ title: '#clonetiktok' }, { title: '#nextjs' }],
  //     songName: 'original sound - Pearl Jam',
  //     videourl:
  //       'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/2792d8ae8c5c4392a8b50416a9cc85ee/?a=1988&br=1520&bt=760&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1613500963&l=2021021612414601019017601432DD8109&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=M3V2cnRweHJ1MzMzaTczM0ApZDRpMzg1aTs6Nzg6ZztpZ2dxLmktXl5pZC1gLS0xMTZzcy9eYDUyM19iMDVfMTQ0YTU6Yw%3D%3D&signature=bdc85d1c4788981428322f3142890784&tk=tt_webid_v2&vl=&vr=',
  //     likes: 881,
  //     comments: 10,
  //     replies: 20,
  //   },
  //   {
  //     id: 2,
  //     author: {
  //       id: 2,
  //       avatar:
  //         'https://avatars.githubusercontent.com/u/72585274?s=460&u=00d8532d63251b36aaab5f81fd1c7422603fa031&v=4f',
  //       name: 'Joel Luis',
  //       username: 'joelluis',
  //     },
  //     description:
  //       'Eddie performing “Growin’ Up” for TeachRock’s Stand With Teachers event.',
  //     tags: [{ title: '#clonetiktok' }, { title: '#nextjs' }],
  //     songName: 'original sound - Pearl Jam',
  //     videourl:
  //       'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/98ed40f683b74854b5b6a398301027af/?a=1988&br=1776&bt=888&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1613501107&l=2021021612444201018919408141E547A2&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=M3I6OmR3b2huMzMzOjczM0ApN2k5OWdkZDw5N2YzZTw7ZWdvZHBzLWhfMDJgLS1iMTZzc2A0YDJeLzZgYjNjXmJhXy06Yw%3D%3D&signature=3c45347fdfac0d21ed0ef4cacc8c4da5&tk=tt_webid_v2&vl=&vr=',
  //     likes: 881,
  //     comments: 10,
  //     replies: 20,
  //   },
  // ];
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
