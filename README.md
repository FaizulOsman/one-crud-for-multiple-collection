# **Handling multiple collections using one CRUD Operation**

## **After cloning the project run the following command:**

**`npm install`** or **`yarn`**

then

**`npm run start`** or **`yarn start`**

## **Collection (Chats):**

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

### **Create Collaborator:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "collaborators",
  "data": {
    "collaboratorId": "test",
    "botId": "test",
    "botCategory": "test",
    "collaborators": "test",
    "nameSpace": "test",
    "projectName": "test",
    "visibility": "test"
  }
}
```

### **Get All Collaborators:**

- http://localhost:5000/api/v1/collaborators?botCategory=test&collaborators=test&projectName=test

### **Get Single Collaborator:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892

### **Update Collaborator:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892

```json
{
  "collaboratorId": "Update",
  "botId": "updated",
  "botCategory": "updated",
  "collaborators": "updated",
  "nameSpace": "updated",
  "projectName": "updated",
  "visibility": "updated"
}
```

### **Delete Collaborator:**

- http://localhost:5000/api/v1/collaborators/6534928288681a54c2a36892

## **Collection (Projects):**

### **Create Project:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "projects",
  "data": {
    "projectId": "test",
    "answers": [],
    "backgroundColor": "test",
    "basePrompt": "test",
    "botBackgroundColor": "test",
    "botMessageColor": "test",
    "botCategory": "test",
    "fileNames": [],
    "fontColor": "test",
    "initialMessage": "test",
    "jobDescription": "test",
    "languageBot": "test",
    "links": "test",
    "nameSpace": "test",
    "projectName": "test",
    "questions": [],
    "suggestedQuestions": [],
    "temperature": "test",
    "userId": "test",
    "userMessageColor": "test",
    "visibility": "test"
  }
}
```

### **Get All Projects:**

- http://localhost:5000/api/v1/projects?projectId=test&botCategory=test&projectName=test&visibility=test

### **Get Single Project:**

- http://localhost:5000/api/v1/projects/6533d654f01113d8229981fe

### **Update Project:**

- http://localhost:5000/api/v1/projects/6533d654f01113d8229981fe

```json
{
  "projectId": "updated",
  "answers": [],
  "backgroundColor": "updated",
  "basePrompt": "updated",
  "botBackgroundColor": "updated",
  "botMessageColor": "updated",
  "botCategory": "updated",
  "fileNames": [],
  "fontColor": "updated",
  "initialMessage": "updated",
  "jobDescription": "updated",
  "languageBot": "updated",
  "links": "updated",
  "nameSpace": "updated",
  "projectName": "updated",
  "questions": [],
  "suggestedQuestions": [],
  "temperature": "updated",
  "userId": "updated",
  "userMessageColor": "updated",
  "visibility": "updated"
}
```

### **Delete Project:**

- http://localhost:5000/api/v1/projects/6533d654f01113d8229981fe

## **Collection (Playgrounds):**

### **Create Playground:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "playgrounds",
  "data": {
    "nameSpace": "test",
    "contact": "test",
    "email": "test",
    "link": "test",
    "userName": "test"
  }
}
```

### **Get All Playgrounds:**

- http://localhost:5000/api/v1/playgrounds?email=test&link=test&userName=test&searchTerm=test

### **Get Single Playground:**

- http://localhost:5000/api/v1/playgrounds/6533dbbdbb2637fc9240c192

### **Update Playground:**

- http://localhost:5000/api/v1/playgrounds/6533dbbdbb2637fc9240c192

```json
{
  "nameSpace": "updated",
  "contact": "updated",
  "email": "updated",
  "link": "updated",
  "userName": "updated"
}
```

### **Delete Playground:**

- http://localhost:5000/api/v1/playgrounds/6533dbbdbb2637fc9240c192

## **Collection (ResumeScreenerAis):**

### **Create ResumeScreenerAi:**

- http://localhost:5000/api/v1/create

```json
{
  "collectionName": "resumeScreenerAis",
  "data": {
    "resumeScreenerAiId": "test",
    "results": [
      {
        "email": "test",
        "name": "test",
        "phoneNumber": "test",
        "rank": "test",
        "similarityScore": "test"
      }
    ],
    "resumeData": [
      {
        "email": "test",
        "name": "test",
        "phoneNumber": "test",
        "resumeText": "test"
      }
    ]
  }
}
```

### **Get All ResumeScreenerAis:**

- http://localhost:5000/api/v1/resumeScreenerAis?resumeScreenerAiId=test&searchTerm=test

### **Get Single ResumeScreenerAi:**

- http://localhost:5000/api/v1/resumeScreenerAis/6533e77cfb1811355f519a63

### **Update ResumeScreenerAi:**

- http://localhost:5000/api/v1/resumeScreenerAis/6533e77cfb1811355f519a63

```json
{
  "resumeScreenerAiId": "updated",
  "results": [
    {
      "email": "updated",
      "name": "updated",
      "phoneNumber": "updated",
      "rank": "updated",
      "similarityScore": "updated"
    }
  ],
  "resumeData": [
    {
      "email": "updated",
      "name": "updated",
      "phoneNumber": "updated",
      "resumeText": "updated"
    }
  ]
}
```

### **Delete ResumeScreenerAi:**

- http://localhost:5000/api/v1/resumeScreenerAis/6533e77cfb1811355f519a63
