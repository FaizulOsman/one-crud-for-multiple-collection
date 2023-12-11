# **Handling multiple collections using one CRUD Operation**

## **After cloning the project run the following command:**

**`npm install`** or **`yarn`**

then

**`npm run start`** or **`yarn start`**

## **Collection (Chat):**

### **Create Chat:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "chats",
  "data": {
    "chatId": "0e06ddc1-411b-46d5-a0b3-bece9a2fba69blossom-and-rhyme-1",
    "answers": [],
    "conversation": {
      "response": "Hi there! Thank you for your interest in Blossom and Rhyme. Our pricing for our luxury floral preservation services can be found on the \"Book Now\" page of our website. Our custom minimum starts at $450. We understand that wedding planning can add up, so we offer easy monthly payment plans through Affirm. You can choose this option at the end of the checkout process. As for our product list, we offer a variety of floral preservation options, including our best-selling 10x10 Floral Block. For more information on our products, please visit our website or feel free to email us at contact@blossomandrhyme.com.",
      "userMessage": "Pricing list and product list?"
    },
    "nameSpace": "blossom-and-rhyme-6",
    "userEmail": "a@gmail.com",
    "userName": "Abul",
    "userNumber": "123456789"
  }
}
```

### **Get All Chat:**

- http://localhost:5000/api/v1/chats?nameSpace=blossom-and-rhyme-6&userEmail=a@gmail.com

### **Get Single Chat:**

- http://localhost:5000/api/v1/chats/6533c2b615e01cab56a58fd8

### **Update Chat:**

- http://localhost:5000/api/v1/chats/6533c2b615e01cab56a58fd8

```json
{
  "chatId": "updated",
  "answers": [],
  "conversation": {
    "response": "updated",
    "userMessage": "updated"
  },
  "nameSpace": "updated",
  "userEmail": "updated",
  "userName": "updated",
  "userNumber": "updated"
}
```

### **Delete Chat:**

- http://localhost:5000/api/v1/chats/6533c2b615e01cab56a58fd8

## **Collection (Collaborators):**

### **Create Collaborators:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "collaborators",
  "data": {
    "collaboratorId": "Text1",
    "botId": "Text1",
    "botCategory": "Text1",
    "collaborators": "Text1",
    "nameSpace": "Text1",
    "projectName": "Text1",
    "visibility": "Text1"
  }
}
```

### **Get All Collaborators:**

- http://localhost:5000/api/v1/collaborators?botCategory=Sales Bot&collaborators=nandinidmc17@gmail.com&projectName=sales_1010

### **Get Single Collaborators:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892

### **Update Collaborators:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892

```json
{
  "collaboratorId": "Update",
  "botId": "Text1",
  "botCategory": "Text1",
  "collaborators": "Text1",
  "nameSpace": "Text1",
  "projectName": "Text1",
  "visibility": "Text1"
}
```

### **Delete Collaborators:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892
