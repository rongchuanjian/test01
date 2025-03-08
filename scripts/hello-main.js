// 省份和城市数据
const cityData = {
    "广东省": ["广州市", "深圳市", "珠海市", "佛山市"],
    "浙江省": ["杭州市", "宁波市", "温州市", "绍兴市"],
    "江苏省": ["南京市", "苏州市", "无锡市", "常州市"],
    "山东省": ["济南市", "青岛市", "烟台市", "潍坊市"],
};


// 显示更多城市
function showMoreCities() {
    const modal = document.getElementById("cityModal");
    modal.style.display = "flex";
}

function showMoreZjCities() {
}

function showMoreJsCities() {
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById("cityModal");
    modal.style.display = "none";
}

// 跳转到城市页面
function redirectToCity(cityName) {
    window.location.href = `hello-city.html?city=${cityName}`;
    // window.location.href = `hello-city.html`;
}

// 添加点击事件监听器
const image = document.getElementById("click-project-item");
if (image) {
    image.addEventListener('click', function() {
        // 跳转到目标网页
        window.location.href = `hello-projects.html`;
    });
}
// 省份选择事件
const provinceSelect = document.getElementById("province");

if (provinceSelect) {
    provinceSelect.addEventListener("change", function() {
        if(this.value === "gx"){
            // document.querySelectorAll('.city-grid').forEach(l => l.classList.remove('active'));
            // document.getElementById("cityList").style.display = "none";
            // document.getElementById("cityListAuto").style.display = "block";
            document.getElementById("cityListAuto").classList.add('active');
            document.getElementById("cityList").classList.remove('active');
        }else if (this.value !== "gx") {
            document.getElementById("cityList").classList.add('active');
            document.getElementById("cityListAuto").classList.remove('active');
        }
    
    });
}

// JSON数据（可以是来自服务器的数据）
const employees = [
    { "id": 1, "province": "张三", "city": "技术部" },
    { "id": 2, "province": "李四", "city": "市场部" },
    { "id": 3, "province": "王五", "city": "财务部" },
    { "id": 4, "province": "赵六", "city": "人事部" },
    { "id": 5, "province": "陈七", "city": "技术部" },
    { "id": 6, "province": "陈八", "city": "电脑部" }
];

// 表格生成函数
function generateTable(data) {
    const tbody = document.getElementById('table-body');
    
    // 清空现有内容
    tbody.innerHTML = '';

    // 遍历数据生成行
    data.forEach(employee => {
        const row = document.createElement('tr');
        
        // 生成单元格
        const cells = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
        ];

        cells[0].textContent = employee.id;
        cells[1].textContent = employee.name;
        cells[2].textContent = employee.department;

        // 将单元格添加到行
        cells.forEach(cell => row.appendChild(cell));
        
        // 将行添加到表格
        tbody.appendChild(row);
    });
}

// 页面加载时生成表格
window.addEventListener('DOMContentLoaded', () => {
    generateTable(employees);
});


const gdCitiesData = {
    "cities": [
        "广州",
        "深圳",
        "珠海",
        "汕头",
        "佛山",
        "韶关",
        "湛江",
        "肇庆",
        "江门",
        "茂名",
        "惠州"
    ]
};

const zjCitiesData = {
    "zjCities": [
        "杭州",
        "宁波",
        "温州",
        "嘉兴",
        "湖州",
        "绍兴",
        "金华",
        "衢州",
        "舟山",
        "台州",
        "丽水"
    ]
};

const jsCitiesData = {
    "jsCities": [
        "南京",
        "苏州",
        "镇江",
        "徐州",
        "扬州"
    ]
};
const gdCitiesData1 = {
        "广东": {
          "gz": "广州市",
          "sz": "深圳市",
          "zh": "珠海市",
          "st": "汕头市",
          "sg": "韶关市",
          "fs": "佛山市",
          "zj": "湛江市",
          "zq": "肇庆市",
          "jm": "江门市",
          "hz": "惠州市",
          "mz": "梅州市",
          "hy": "河源市",
          "qy": "清远市",
          "dg": "东莞市",
          "cz": "潮州市",
          "zs": "中山市"
        }
}

function loadCities() {
    const gdCityList = document.getElementById('gd');
    const zjCityList = document.getElementById('zj');
    const jsCityList = document.getElementById('js');
    gdCitiesData.cities.forEach(city => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = city;
        a.href = `hello-city.html?city=${encodeURIComponent(city)}`; // 跳转链接，传递城市名
        li.appendChild(a);
        gdCityList.appendChild(li);
    });
    
    zjCitiesData.zjCities.forEach(zjCity => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = zjCity;
        a.href = `hello-city.html?city=${encodeURIComponent(zjCity)}`; // 跳转链接，传递城市名
        li.appendChild(a);
        zjCityList.appendChild(li);
    });
    
    jsCitiesData.jsCities.forEach(jsCity => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = jsCity;
        a.href = `hello-city.html?city=${encodeURIComponent(jsCity)}`; // 跳转链接，传递城市名
        li.appendChild(a);
        jsCityList.appendChild(li);
    });
}

window.onload = loadCities;

//成果展示
const videoElement = document.getElementById('city-video');
const videoSource = document.getElementById('video-source');
videoSource.src = "videos/guangzhou.mp4";
videoElement.load(); // 加载视频


const search = document.getElementById("search");

search.addEventListener(
"keydown",
(event) => {
    if (event.key === 'Enter') {
        const query = event.target.value;
        const url = 'hello-city.html?city='+ query;
        const win = window.open(url, '_blank');
    }
},
false
);

