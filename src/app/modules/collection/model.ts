import { Schema, model } from 'mongoose';
import {
  IChat,
  ChatModel,
  ICollaborator,
  CollaboratorModel,
  IProject,
  ProjectModel,
} from './interface';

// ################ Chat Schema ################
export const ChatSchema = new Schema<IChat, ChatModel>(
  {
    chatId: {
      type: String,
      required: true,
    },
    answers: {
      type: [],
      required: true,
    },
    conversation: {
      type: Object,
      required: true,
    },
    nameSpace: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Chat = model<IChat, ChatModel>('Chats', ChatSchema);

// ################ Collaborator Schema ################
export const CollaboratorSchema = new Schema<ICollaborator, CollaboratorModel>(
  {
    collaboratorId: {
      type: String,
      required: true,
    },
    botId: {
      type: String,
      required: true,
    },
    botCategory: {
      type: String,
      required: true,
    },
    collaborators: {
      type: String,
      required: true,
    },
    nameSpace: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Collaborator = model<ICollaborator, CollaboratorModel>(
  'Collaborators',
  CollaboratorSchema
);

// ################ Project Schema ################
export const ProjectSchema = new Schema<IProject, ProjectModel>(
  {
    projectId: { type: String, required: true },
    answers: { type: [], required: true },
    backgroundColor: { type: String, required: true },
    basePrompt: { type: String, required: true },
    botBackgroundColor: { type: String, required: true },
    botMessageColor: { type: String, required: true },
    botCategory: { type: String, required: true },
    fileNames: { type: [], required: true },
    fontColor: { type: String, required: true },
    initialMessage: { type: String, required: true },
    jobDescription: { type: String, required: true },
    languageBot: { type: String, required: true },
    links: { type: String, required: true },
    nameSpace: { type: String, required: true },
    projectName: { type: String, required: true },
    questions: { type: [], required: true },
    suggestedQuestions: { type: [], required: true },
    temperature: { type: String, required: true },
    userId: { type: String, required: true },
    userMessageColor: { type: String, required: true },
    visibility: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Project = model<IProject, ProjectModel>('Projects', ProjectSchema);
