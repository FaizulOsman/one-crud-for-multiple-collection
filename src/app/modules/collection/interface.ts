import { Model } from 'mongoose';

// ################ Chat ################
export type IChat = {
  chatId: string;
  answers: [];
  conversation: {
    response: string;
    userMessage: string;
  };
  nameSpace: string;
  userEmail: string;
  userName: string;
  userNumber: string;
};

// Chat Model
export type ChatModel = Model<IChat, Record<string, unknown>>;

export type IChatFilters = {
  searchTerm?: string;
  nameSpace?: string;
  userName?: string;
  userEmail?: string;
};

// ################ Collaborator ################
export type ICollaborator = {
  collaboratorId: string;
  botId: string;
  botCategory: string;
  collaborators: string;
  nameSpace: string;
  projectName: string;
  visibility: string;
};

// Collaborator Model
export type CollaboratorModel = Model<ICollaborator, Record<string, unknown>>;

export type ICollaboratorFilters = {
  searchTerm?: string;
  botCategory?: string;
  collaborators?: string;
  projectName?: string;
  visibility?: string;
};
