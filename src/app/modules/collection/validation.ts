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
