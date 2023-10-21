/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { SortOrder } from 'mongoose';
import {
  IChat,
  IChatFilters,
  ICollaborator,
  ICollaboratorFilters,
} from './interface';
import { Chat, Collaborator } from './model';
import httpStatus from 'http-status';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  chatSearchableFields,
  collaboratorSearchableFields,
} from './constants';
import { IGenericResponse } from '../../../interfaces/common';
import ApiError from '../../../errors/apiError';
import { paginationHelper } from '../../../helper/paginationHelper';

// Insert Into DB
const insertIntoDB = async (
  collectionName: string,
  payload: IChat | ICollaborator
): Promise<any> => {
  let result = null;

  if (collectionName === 'chats') {
    result = await Chat.create(payload);
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.create(payload);
  }

  return result;
};

// Get All From DB (can also filter)
const getAllFromDB = async (
  collectionName: string,
  filters: IChatFilters | ICollaboratorFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IChat[] | ICollaborator[]>> => {
  // Try not to use any
  const { searchTerm, ...filtersData } = filters;

  const andConditions = []; // Try not to use any

  if (searchTerm && collectionName === 'chats') {
    andConditions?.push({
      $or: chatSearchableFields?.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  } else if (searchTerm && collectionName === 'collaborators') {
    andConditions?.push({
      $or: collaboratorSearchableFields?.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return { [field]: value };
      }),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);

  const sortCondition: '' | { [key: string]: SortOrder } = sortBy &&
    sortOrder && { [sortBy]: sortOrder };

  const whereCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  let result: any[] = [];
  if (collectionName === 'chats') {
    result = await Chat.find(whereCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limit);
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.find(whereCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limit);
  }

  let total = 0;
  if (collectionName === 'chats') {
    total = await Chat.countDocuments(whereCondition);
  } else if (collectionName === 'collaborators') {
    total = await Collaborator.countDocuments(whereCondition);
  }

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get Single From DB
const getSingleFromDB = async (
  collectionName: string,
  id: string
): Promise<IChat | ICollaborator | null> => {
  let result = null;
  if (collectionName === 'chats') {
    result = await Chat.findById(id);
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.findById(id);
  }

  return result;
};

// Update One
const updateSingle = async (
  collectionName: string,
  id: string,
  payload: Partial<IChat | ICollaborator>
): Promise<IChat | ICollaborator | null> => {
  let result = null;

  if (collectionName === 'chats') {
    const isExist = await Chat.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Chat data not found');
    }

    result = await Chat.findByIdAndUpdate(id, payload, {
      new: true,
    });
  } else if (collectionName === 'collaborators') {
    const isExist = await Collaborator.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Collaborator data not found');
    }

    result = await Collaborator.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }

  return result;
};

// Delete One
const deleteSingle = async (
  collectionName: string,
  id: string
): Promise<IChat | ICollaborator | null> => {
  let result = null;

  if (collectionName === 'chats') {
    result = await Chat.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Data Not Found');
    }
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Data Not Found');
    }
  }

  return result;
};

export const Service = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateSingle,
  deleteSingle,
};
