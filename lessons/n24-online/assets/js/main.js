const api = [
  {
    name: {
      firstName: 'FirstName',
    },
    photos: [{
      url: "dwadawdawdaw11111",
      tags: [
        {
          label: 'photo',
          id: 123
        },
        {
          label: 'summer',
          id: 111
        }
      ]
    },
    {
      url: "dawdawdwadaw121212",
      tags: [
        {
          label: 'winter',
          id: 1323
        },
        {
          label: 'italy',
          id: 1121
        }
      ]
    }]
  },
  {
    name: {
      firstName: 'FirstName 2',
      lastName: 'LastName 2',
    },
    photos: [{
      url: "dawdawdawdaw222222",
      tags: [
        {
          label: 'photo 2',
          id: 1232
        },
        {
          label: 'summer 2',
          id: 1112
        }
      ]
    },
    {
      url: "dwadawdawdaw23232323",
      tags: [
        {
          label: 'winter',
          id: 1323
        },
        {
          label: 'italy',
          id: 1121
        }
      ]
    }]
  }
];

const folderTree = {
  name: "root",
  children: [
    {
      name: "folder1",
      children: [
        { name: "file1.txt", children: [] },
        { name: "file2.txt", children: [] },
      ],
    },
    {
      name: "folder2",
      children: [
        { name: "folder3", children: [{ name: "file3.txt", children: [] }] },
      ],
    },
  ],
};

// Перебор №1
// api?.forEach(({name, photos}) => {
//   render(document.body, `${name?.firstName || ''} ${name?.lastName || ''}`);

//   // Перебор №2 (вложенный)
//   photos?.forEach(({url, tags}) => {
    
//     render(document.body, `https://google.com/${url}`);

//     // Перебор №3 (вложенный)
//     tags?.forEach(({label, id}) => {
//       render(document.body, `${id}: ${label}`);
//     });

//   });

// });


// function render(parrent, text) {
//   const div = document.createElement('div');

//   div.textContent = text;

//   parrent.appendChild(div)
// }




// РЕКУРСИЯ

function renderThree(node) {
  const ul = document.createElement('ul');
  const li = document.createElement('li');

    li.textContent = node.name;
    ul.appendChild(li);

    if (node.children && node.children.length > 0) {
      const childUl = document.createElement('ul');
      node.children.forEach(child => {
        childUl.appendChild(renderThree(child));
      });
      li.appendChild(childUl)
    }

    return ul;
};

const folders = renderThree(folderTree);

document.body.appendChild(folders);


const myArr = [5, 25, 35, 55, 85]

function arrSum(arr) {
  
  if (arr.length === 0) {
    return 0
  }

  return +arr[0] + +arrSum(arr.slice(1))
}

const resultSummArr = arrSum(myArr)

// console.log(resultSummArr);


function factorial(n) {
  
  if (n === 0 || n === 1) {
    return 1
  }

  return n * factorial(n - 1);
}

const resultFactorial = factorial(5);
// 5 * 4 * 3 * 2 * 1

// console.log(resultFactorial);
