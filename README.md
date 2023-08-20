
# ZM MERN STACK project

Our ZM MERN Stack E-commerce initiative modernizes Point-of-Sale systems. Powered by MongoDB, Express.js, React, and Node.js, it delivers seamless shopping. Users easily explore and order while our tech ensures efficient data handling, smooth communication, and dynamic interfaces. This redefines experiences, optimizing operations for modern enterprises.


## Technologies Used
1.  **Frontend:** React,Material UI
2. **Backend:** Express.js, Node.js
3. **Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```



##  Live URL

https://wicked-boot-lion.cyclic.cloud/



#  Hi 👋, I'm Wania Khan
A passionate frontend developer

All of my social media accounts available at https://bio.site/Wania_khan


# About Me

I'm an enthusiastic frontend developer with a deep passion for creating intuitive and captivating user experiences. Armed with a solid expertise in languages such as HTML, CSS, and JavaScript, I'm dedicated to fashioning contemporary and adaptive web applications.

1. Presently engrossed in: Frontend Web Development Projects
2. Expanding my skills in: MERN Stack
3. Eager to team up on: Full Stack Ventures



## API Reference
### 1) Users API
#### A) SignUp User

```http
  POST /api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User's username |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's Password |

#### B) Login User

```http
  POST /api/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's Password |

#### C) Get all User
|Method | :-------- :------------------------- | | GET| Get all Users|
```http
  GET /api/getallusers
```

### 2) Products API
#### A) Get all products

```http
  GET /api/get-all-products
```
|Method |Description | | :-------- :------------------------- | | GET| Get all products|

#### B) Create Product

```http
  POST /api/create-product
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Product name |
| `category` | `string` | **Required**. Product Category |
| `brand` | `string` | **Required**. Product Brand|
| `price` | `string` | **Required**. Product Price|


#### B) Update Product


```http
  PUT /api/update-product
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Product ID |
| `name` | `string` | **Required**. Product new Name |
| `category` | `string` | **Required**. Product new Category Name|
| `brand` | `string` | **Required**. Product new Brand Name|
| `price` | `string` | **Required**. Product new Price|

#### C) Delete Product


```http
  DELETE /api/delete-product
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Product ID |








