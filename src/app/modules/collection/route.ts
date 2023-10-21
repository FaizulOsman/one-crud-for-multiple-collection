import express from 'express';
import { Controller } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { ChatValidation, CollaboratorValidation } from './validation';
const router = express.Router();

// Routes
router.post(
  '/create',
  (req, res, next) => {
    if (req?.body?.collectionName === 'chats') {
      validateRequest(ChatValidation.createChatZodValidation)(req, res, next);
    } else if (req?.body?.collectionName === 'collaborators') {
      validateRequest(CollaboratorValidation.createCollaboratorZodValidation)(
        req,
        res,
        next
      );
    }
  },
  Controller.insertIntoDB
);

router.get('/:collectionName', Controller.getAllFromDB);

router.delete('/:collectionName/:id', Controller.deleteSingle);

router.get('/:collectionName/:id', Controller.getSingleFromDB);

router.patch(
  '/:collectionName/:id',
  (req, res, next) => {
    if (req?.params?.collectionName === 'chats') {
      validateRequest(ChatValidation.updateChatZodValidation)(req, res, next);
    } else if (req?.params?.collectionName === 'collaborators') {
      validateRequest(CollaboratorValidation.updateCollaboratorZodValidation)(
        req,
        res,
        next
      );
    }
  },
  Controller.updateSingle
);

export const Routes = router;
