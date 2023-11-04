import { z } from 'zod';

// ################ Chat ################
const createChatZodValidation = z.object({
  body: z.object({
    data: z.object({
      chatId: z.string(),
      answers: z.array(z.unknown()),
      conversation: z.object({
        response: z.string(),
        userMessage: z.string(),
      }),
      nameSpace: z.string(),
      userEmail: z.string(),
      userName: z.string(),
      userNumber: z.string(),
    }),
  }),
});

const updateChatZodValidation = z.object({
  body: z.object({
    chatId: z.string().optional(),
    answers: z.array(z.unknown()).optional(),
    conversation: z
      .object({
        response: z.string().optional(),
        userMessage: z.string().optional(),
      })
      .optional(),
    nameSpace: z.string().optional(),
    userEmail: z.string().optional(),
    userName: z.string().optional(),
    userNumber: z.string().optional(),
  }),
});

export const ChatValidation = {
  createChatZodValidation,
  updateChatZodValidation,
};

// ################ Collaborator ################
const createCollaboratorZodValidation = z.object({
  body: z.object({
    data: z.object({
      collaboratorId: z.string(),
      botId: z.string(),
      botCategory: z.string(),
      collaborators: z.string(),
      nameSpace: z.string(),
      projectName: z.string(),
      visibility: z.string(),
    }),
  }),
});

const updateCollaboratorZodValidation = z.object({
  body: z.object({
    collaboratorId: z.string().optional(),
    botId: z.string().optional(),
    botCategory: z.string().optional(),
    collaborators: z.string().optional(),
    nameSpace: z.string().optional(),
    projectName: z.string().optional(),
    visibility: z.string().optional(),
  }),
});

export const CollaboratorValidation = {
  createCollaboratorZodValidation,
  updateCollaboratorZodValidation,
};

// ################ Project ################
const createProjectZodValidation = z.object({
  body: z.object({
    data: z.object({
      projectId: z.string(),
      answers: z.array(z.unknown()),
      backgroundColor: z.string(),
      basePrompt: z.string(),
      botBackgroundColor: z.string(),
      botMessageColor: z.string(),
      botCategory: z.string(),
      fileNames: z.array(z.unknown()),
      fontColor: z.string(),
      initialMessage: z.string(),
      jobDescription: z.string(),
      languageBot: z.string(),
      links: z.string(),
      nameSpace: z.string(),
      projectName: z.string(),
      questions: z.array(z.unknown()),
      suggestedQuestions: z.array(z.unknown()),
      temperature: z.string(),
      userId: z.string(),
      userMessageColor: z.string(),
      visibility: z.string(),
    }),
  }),
});

const updateProjectZodValidation = z.object({
  body: z.object({
    projectId: z.string().optional(),
    answers: z.array(z.unknown()).optional(),
    backgroundColor: z.string().optional(),
    basePrompt: z.string().optional(),
    botBackgroundColor: z.string().optional(),
    botMessageColor: z.string().optional(),
    botCategory: z.string().optional(),
    fileNames: z.array(z.unknown()).optional(),
    fontColor: z.string().optional(),
    initialMessage: z.string().optional(),
    jobDescription: z.string().optional(),
    languageBot: z.string().optional(),
    links: z.string().optional(),
    nameSpace: z.string().optional(),
    projectName: z.string().optional(),
    questions: z.array(z.unknown()).optional(),
    suggestedQuestions: z.array(z.unknown()).optional(),
    temperature: z.string().optional(),
    userId: z.string().optional(),
    userMessageColor: z.string().optional(),
    visibility: z.string().optional(),
  }),
});

export const ProjectValidation = {
  createProjectZodValidation,
  updateProjectZodValidation,
};

// ################ Playground ################
const createPlaygroundZodValidation = z.object({
  body: z.object({
    data: z.object({
      nameSpace: z.string(),
      contact: z.string(),
      email: z.string(),
      link: z.string(),
      userName: z.string(),
    }),
  }),
});

const updatePlaygroundZodValidation = z.object({
  body: z.object({
    nameSpace: z.string().optional(),
    contact: z.string().optional(),
    email: z.string().optional(),
    link: z.string().optional(),
    userName: z.string().optional(),
  }),
});

export const PlaygroundValidation = {
  createPlaygroundZodValidation,
  updatePlaygroundZodValidation,
};

// ################ ResumeScreenerAi ################
const createResumeScreenerAiZodValidation = z.object({
  body: z.object({
    data: z.object({
      resumeScreenerAiId: z.string(),
      results: z.array(
        z.object({
          email: z.string().optional(),
          name: z.string().optional(),
          phoneNumber: z.string().optional(),
          rank: z.string().optional(),
          similarityScore: z.string().optional(),
        })
      ),
      resumeData: z.array(
        z.object({
          email: z.string().optional(),
          name: z.string().optional(),
          phoneNumber: z.string().optional(),
          resumeText: z.string().optional(),
        })
      ),
    }),
  }),
});

const updateResumeScreenerAiZodValidation = z.object({
  body: z.object({
    resumeScreenerAiId: z.string().optional(),
    results: z
      .array(
        z.object({
          email: z.string().optional(),
          name: z.string().optional(),
          phoneNumber: z.string().optional(),
          rank: z.string().optional(),
          similarityScore: z.string().optional(),
        })
      )
      .optional(),
    resumeData: z
      .array(
        z.object({
          email: z.string().optional(),
          name: z.string().optional(),
          phoneNumber: z.string().optional(),
          resumeText: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const ResumeScreenerAiValidation = {
  createResumeScreenerAiZodValidation,
  updateResumeScreenerAiZodValidation,
};
