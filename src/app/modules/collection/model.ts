import { Schema, model } from 'mongoose';
import {
  IChat,
  ChatModel,
  ICollaborator,
  CollaboratorModel,
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
