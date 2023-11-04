/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { Service } from './service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import {
  IChat,
  ICollaborator,
  IPlayground,
  IProject,
  IResumeScreenerAi,
} from './interface';
import {
  chatFilterableFields,
  collaboratorFilterableFields,
  playgroundFilterableFields,
  projectFilterableFields,
  resumeScreenerAiFilterableFields,
} from './constants';
import { paginationFields } from '../../../constants/pagination';
import { pick } from '../../../shared/pick';

// Insert Into DB
const insertIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { collectionName, data } = req.body;

    const result = await Service.insertIntoDB(collectionName, data);

    // Send Response
    sendResponse<
      IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi
    >(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Created Successfully',
      data: result,
    });
  }
);

// Get all From DB
const getAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const collectionName = req.params.collectionName;
    const paginationOptions = pick(req.query, paginationFields);

    let filters = {};
    if (collectionName === 'chats') {
      filters = pick(req.query, chatFilterableFields);
    } else if (collectionName === 'collaborators') {
      filters = pick(req.query, collaboratorFilterableFields);
    } else if (collectionName === 'projects') {
      filters = pick(req.query, projectFilterableFields);
    } else if (collectionName === 'playgrounds') {
      filters = pick(req.query, playgroundFilterableFields);
    } else if (collectionName === 'resumeScreenerAis') {
      filters = pick(req.query, resumeScreenerAiFilterableFields);
    }

    const result = await Service.getAllFromDB(
      collectionName,
      filters,
      paginationOptions
    );

    // Send Response
    sendResponse<
      | IChat[]
      | ICollaborator[]
      | IProject[]
      | IPlayground[]
      | IResumeScreenerAi[]
    >(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data retrieved Successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

// Get single From DB
const getSingleFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const collectionName = req.params.collectionName;
    const id = req?.params?.id;

    const result = await Service.getSingleFromDB(collectionName, id);

    // Send Response
    sendResponse<
      IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi
    >(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get Single Data Successfully',
      data: result,
    });
  }
);

// Update One
const updateSingle: RequestHandler = catchAsync(async (req, res) => {
  const collectionName = req.params.collectionName;
  const id = req.params.id;
  const updateData = req.body;

  const result = await Service.updateSingle(collectionName, id, updateData);

  sendResponse<
    IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi
  >(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data updated successfully',
    data: result,
  });
});

// Delete One
const deleteSingle: RequestHandler = catchAsync(async (req, res) => {
  const collectionName = req.params.collectionName;
  const id = req.params.id;
  const result = await Service.deleteSingle(collectionName, id);

  sendResponse<
    IChat | ICollaborator | IProject | IPlayground | IResumeScreenerAi
  >(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data deleted successfully',
    data: result,
  });
});

export const Controller = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateSingle,
  deleteSingle,
};
