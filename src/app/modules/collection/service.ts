/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { SortOrder } from 'mongoose';
import {
  IChat,
  IChatFilters,
  ICollaborator,
  ICollaboratorFilters,
  IPlayground,
  IPlaygroundFilters,
  IProject,
  IProjectFilters,
  IResumeScreenerAi,
  IResumeScreenerAiFilters,
} from './interface';
import {
  Chat,
  Collaborator,
  Playground,
  Project,
  ResumeScreenerAi,
} from './model';
import httpStatus from 'http-status';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  chatSearchableFields,
  collaboratorSearchableFields,
  playgroundSearchableFields,
  projectSearchableFields,
  resumeScreenerAiSearchableFields,
} from './constants';
import { IGenericResponse } from '../../../interfaces/common';
import ApiError from '../../../errors/apiError';
import { paginationHelper } from '../../../helper/paginationHelper';

// Insert Into DB
const insertIntoDB = async (
  collectionName: string,
  payload: IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi
): Promise<any> => {
  let result = null;

  if (collectionName === 'chats') {
    result = await Chat.create(payload);
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.create(payload);
  } else if (collectionName === 'projects') {
    result = await Project.create(payload);
  } else if (collectionName === 'playgrounds') {
    result = await Playground.create(payload);
  } else if (collectionName === 'resumeScreenerAis') {
    result = await ResumeScreenerAi.create(payload);
  }

  return result;
};

// Get All From DB (can also filter)
const getAllFromDB = async (
  collectionName: string,
  filters:
    | IChatFilters
    | ICollaboratorFilters
    | IProjectFilters
    | IPlaygroundFilters
    | IResumeScreenerAiFilters,
  paginationOptions: IPaginationOptions
): Promise<
  IGenericResponse<
    IChat[] | ICollaborator[] | IProject[] | IPlayground[] | IResumeScreenerAi[]
  >
> => {
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
  } else if (searchTerm && collectionName === 'projects') {
    andConditions?.push({
      $or: projectSearchableFields?.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  } else if (searchTerm && collectionName === 'playgrounds') {
    andConditions?.push({
      $or: playgroundSearchableFields?.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  } else if (searchTerm && collectionName === 'resumeScreenerAis') {
    andConditions?.push({
      $or: resumeScreenerAiSearchableFields?.map(field => ({
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
  } else if (collectionName === 'projects') {
    result = await Project.find(whereCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limit);
  } else if (collectionName === 'playgrounds') {
    result = await Playground.find(whereCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limit);
  } else if (collectionName === 'resumeScreenerAis') {
    result = await ResumeScreenerAi.find(whereCondition)
      .sort(sortCondition)
      .skip(skip)
      .limit(limit);
  }

  let total = 0;
  if (collectionName === 'chats') {
    total = await Chat.countDocuments(whereCondition);
  } else if (collectionName === 'collaborators') {
    total = await Collaborator.countDocuments(whereCondition);
  } else if (collectionName === 'projects') {
    total = await Project.countDocuments(whereCondition);
  } else if (collectionName === 'playgrounds') {
    total = await Playground.countDocuments(whereCondition);
  } else if (collectionName === 'resumeScreenerAis') {
    total = await ResumeScreenerAi.countDocuments(whereCondition);
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
): Promise<
  IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi | null
> => {
  let result = null;
  if (collectionName === 'chats') {
    result = await Chat.findById(id);
  } else if (collectionName === 'collaborators') {
    result = await Collaborator.findById(id);
  } else if (collectionName === 'projects') {
    result = await Project.findById(id);
  } else if (collectionName === 'playgrounds') {
    result = await Playground.findById(id);
  } else if (collectionName === 'resumeScreenerAis') {
    result = await ResumeScreenerAi.findById(id);
  }

  return result;
};

// Update One
const updateSingle = async (
  collectionName: string,
  id: string,
  payload: Partial<IChat | ICollaborator>
): Promise<
  IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi | null
> => {
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
  } else if (collectionName === 'projects') {
    const isExist = await Project.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Project data not found');
    }

    result = await Project.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
  } else if (collectionName === 'playgrounds') {
    const isExist = await Playground.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Playground data not found');
    }

    result = await Playground.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
  } else if (collectionName === 'resumeScreenerAis') {
    const isExist = await ResumeScreenerAi.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'ResumeScreenerAi data not found'
      );
    }

    result = await ResumeScreenerAi.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }

  return result;
};

// Delete One
const deleteSingle = async (
  collectionName: string,
  id: string
): Promise<
  IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi | null
> => {
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
  } else if (collectionName === 'projects') {
    result = await Project.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Data Not Found');
    }
  } else if (collectionName === 'playgrounds') {
    result = await Playground.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Data Not Found');
    }
  } else if (collectionName === 'resumeScreenerAis') {
    result = await ResumeScreenerAi.findByIdAndDelete(id);
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
