import axios from "axios";

export default async function getData(userId) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const mergedData = {
    user,
    posts,
  };
  return mergedData;
}

(async () => {
   const data = await getData(3);
   console.log(data); 
})()