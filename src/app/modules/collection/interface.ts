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

// ################ Project ################
export type IProject = {
  projectId: string;
  answers: [];
  backgroundColor: string;
  basePrompt: string;
  botBackgroundColor: string;
  botMessageColor: string;
  botCategory: string;
  fileNames: [];
  fontColor: string;
  initialMessage: string;
  jobDescription: string;
  languageBot: string;
  links: string;
  nameSpace: string;
  projectName: string;
  questions: [];
  suggestedQuestions: [];
  temperature: string;
  userId: string;
  userMessageColor: string;
  visibility: string;
};

// Project Model
export type ProjectModel = Model<IProject, Record<string, unknown>>;

export type IProjectFilters = {
  searchTerm?: string;
  projectId?: string;
  botCategory?: string;
  projectName?: string;
  visibility?: string;
};

// ################ Playground ################
export type IPlayground = {
  nameSpace: string;
  contact: string;
  email: string;
  link: string;
  userName: string;
};

// Playground Model
export type PlaygroundModel = Model<IPlayground, Record<string, unknown>>;

export type IPlaygroundFilters = {
  searchTerm?: string;
  email?: string;
  link?: string;
  userName?: string;
};

// ################ ResumeScreenerAi ################
export type IResults = {
  email: string;
  name: string;
  phoneNumber: string;
  rank: string;
  similarityScore: string;
};

export type IResumeData = {
  email: string;
  name: string;
  phoneNumber: string;
  resumeText: string;
};

export type IResumeScreenerAi = {
  resumeScreenerAiId: string;
  results: IResults[];
  resumeData: IResumeData[];
};

// ResumeScreenerAi Model
export type ResumeScreenerAiModel = Model<
  IResumeScreenerAi,
  Record<string, unknown>
>;

export type IResumeScreenerAiFilters = {
  searchTerm?: string;
  resumeScreenerAiId?: string;
};
