const postsContainer = document.querySelector(".posts-container");
const searchDisplay = document.querySelector(".search-display");

//备份
// let postsData = "";
// fetch(
//     "https://gist.githubusercontent.com/jemimaabu/564beec0a30dbd7d63a90a153d2bc80b/raw/0b7e25ba0ebee6dbba216cfcfbae72d460a60f26/tutorial-levels"
// ).then(async (response) => {
//     postsData = await response.json();
//     postsData.map((post) => createPost(post));
// });

let postsData = [
    {
       "title": "景秀峨眉",
       "codes":["景秀峨眉", "jx", "jxem", "景秀"],
       "link": "../index.html",
       "description": "下载PDF",
       "image": "images/video1.jpg",
       "categories": ["一栋", "二栋", "三栋", "四栋"],
       "level": "Intermediate"
    },
    {
       "title": "世纪花园",
       "codes":["世纪花园", "sjhy", "sj", "世纪"],
       "link": "../index.html",
       "description": "下载PDF",
       "image": "images/video2.jpg",
       "categories": ["一栋", "二栋", "三栋", "四栋"],
       "level": "Beginner"
    },
    {
        "title": "景秀峨眉",
        "codes":["景秀峨眉", "jx", "jxem", "景秀"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video1.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋","五栋"],
        "level": "Intermediate"
     },
     {
        "title": "世纪花园",
        "codes":["世纪花园", "sjhy", "sj", "世纪"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video2.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋"],
        "level": "Beginner"
     },
     {
        "title": "景秀峨眉",
        "codes":["景秀峨眉", "jx", "jxem", "景秀"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video1.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋"],
        "level": "Intermediate"
     },
     {
        "title": "世纪花园",
        "codes":["世纪花园", "sjhy", "sj", "世纪"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video2.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋"],
        "level": "Beginner"
     },
     {
        "title": "景秀峨眉",
        "codes":["景秀峨眉", "jx", "jxem", "景秀"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video1.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋"],
        "level": "Intermediate"
     },
     {
        "title": "世纪花园",
        "codes":["世纪花园", "sjhy", "sj", "世纪"],
        "link": "../index.html",
        "description": "下载PDF",
        "image": "images/video2.jpg",
        "categories": ["一栋", "二栋", "三栋", "四栋"],
        "level": "Beginner"
     }
 ];
 //备份
//  postsData.forEach(tutorial => {
//     const post = document.createElement("div");
//     post.innerHTML = `
//        <h2>${tutorial.title}</h2>
//        <img src="${tutorial.image}" alt="${tutorial.title}" width="300">
//        <p>${tutorial.description}</p>
//        <p><strong>Categories:</strong> ${tutorial.categories.join(", ")}</p>
//        <p><strong>Level:</strong> ${tutorial.level}</p>
//        <a href="${tutorial.link}" target="_blank">Read More</a>
//        <hr>
//     `;
//     postsContainer.appendChild(post);
//  });
 
postsData.forEach(tiem => {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
        <div class="post-title">
            ${tiem.title}
        </div>
        <div class="post-preview">
            <a class="post-preview" href="${tiem.link}" target="_blank">
                <img class="post-image" src="${tiem.image}" width="300">
            </a>
        </div>
        <div class="post-content">
            <div class="post-detail">
                <p class="post-title">${tiem.title}</p>
                <p>${tiem.description}</p>
                <div class="post-tags">
                    ${tiem.categories
                        .map((category) => {
                            return '<a class="post-tag" target="_blank">' + category + "</a>";
                        })
                        .join("")}
                </div>
                <p><strong>Level:</strong> ${tiem.level}</p>
            </div>
        </div>
        <hr>
    `;
    postsContainer.appendChild(post);
});
const createPost = (postData) => {
const { title, link, image, categories } = postData;
const post = document.createElement("div");
post.className = "post";
post.innerHTML = `
    <a class="post-preview" href="${link}" target="_blank">
        <img class="post-image" src="${image}">
    </a>
    <div class="post-content">
        <p class="post-title">${title}</p>
        <div class="post-tags">
        ${categories
            .map((category) => {
                return '<span class="post-tag">' + category + "</span>";
            })
            .join("")}
        </div>
    </div>
`;

postsContainer.append(post);
};

const handleSearchPosts = (query) => {
const searchQuery = query.trim().toLowerCase();

if (searchQuery.length <= 1) {
    resetPosts()
    return
}

// let searchResults = [...postsData].filter(
//     (post) =>
//     post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
//     post.title.toLowerCase().includes(searchQuery)
// );
let searchResults = [...postsData].filter(
    (post) =>
    // post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
    post.codes.some((code) => code.toLowerCase().includes(searchQuery)) ||
    post.title.toLowerCase().includes(searchQuery)
);
if (searchResults.length == 0) {
    searchDisplay.innerHTML = "No results found"
} else if (searchResults.length == 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`
} else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`
}

postsContainer.innerHTML = "";
    searchResults.map((post) => createPost(post));
};

const resetPosts = () => {
    searchDisplay.innerHTML = ""
    postsContainer.innerHTML = "";
    postsData.map((post) => createPost(post));
};

const search = document.getElementById("search");

let debounceTimer;
const debounce = (callback, time) => {
window.clearTimeout(debounceTimer);
debounceTimer = window.setTimeout(callback, time);
};

search.addEventListener(
"input",
(event) => {
    const query = event.target.value;
    debounce(() => handleSearchPosts(query), 500);
},
false
);