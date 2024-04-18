import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";
import ButtonTest from "./components/ButtonTest";



async function getPosts(){
  const posts = await prisma.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{
          name: true
        }
      }
    }
  })
  return posts;
}

export default async function Home() {

  const posts = await getPosts()
  console.log('posts', {posts})



  return (
    <main className={styles.main}>
      <header>
        <ButtonTest 
          label={"Click"}
          dataId={"button-cypress"}/>
      </header>

      <Link href="/add-post">Add Post</Link>
      <h1>feed</h1>

      {
        posts.map((post)=>{
          return(
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
              />
          )
        })
      }
    </main>
  );
}
