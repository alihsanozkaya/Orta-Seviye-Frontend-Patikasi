import fetch from "node-fetch";
import axios from "axios";

const time = 2000;

setTimeout(() => {
  console.log(`${time / 1000} saniye sonra çalıştı`);
}, time);

setInterval(() => {
  console.log(`${time / 1000} saniyede bir çalışırım`);
}, time);

const sayHi = (name) => {
  console.log(`${name} Merhaba`);
};

sayHi("Ali");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("Users Yüklendi!", users);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post) => {
        console.log("Post Yüklendi!", post);
      });
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("Users Yüklendi!", users);
  });
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => data.json())
  .then((post) => {
    console.log("Post Yüklendi!", post);
  });

async function getData() {
    const users = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);   
}

getData();

(async() => {
    const users = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);   
})();


(async () => {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log(users);
    console.log(post1);
    console.log(post2);
})();

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve("Comments");            
        }
        else{
            reject("Bir problem oluştu");
        }
    })
}

getComments(2)
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
        if (users) {
            resolve(users);            
        }
        else {
            reject("Bir problem oluştu.");
        }
    })
}

getUsers()
.then((users) => {
    console.log(users);
}).catch((err) => {
    console.log(err);
})

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        if (post) {
            resolve(post);
        } else {
            reject("Bir sorun oluştu");
        }
    })
}

getPost(2).then((post) => {
    console.log(post);
}).catch((err) => {
    console.log(err);
});

(async () => {
    try {
        const users = await getUsers();
        const post = await getPost(1);
        
        console.log(users);
        console.log(post);
    } catch (error) {
        console.log(error);
    }
})();

Promise.all([getUsers(), getPost(1)]).then(console.log).catch(console.log);