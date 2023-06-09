import { Prisma } from '@prisma/client'
import {
  ConversationPopulated,
  MessagePopulated,
} from '../util/common'

// USERS

export interface CreateUsernameData {
  createUsername: {
    success: boolean
    error: string
  }
}

export interface CreateUsernameVariables {
  username: string
}

export interface SearchUsersInput {
  username: string
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUser>
}

export interface SearchedUser {
  id: string
  username: string
}

// CONVERSATIONS

export interface ConversationsData {
  conversations: Array<ConversationPopulated>
}

export interface CreateConversationData {
  createConversation: {
    conversationId: string
  }
}

export interface CreateConversationInput {
  participantIds: Array<string>
}

export interface ConversationUpdatedData {
  conversationUpdated: {
    conversation: ConversationPopulated
  }
}

export interface ConversationDeletedData {
  conversationDeleted: {
    id: string;
  };
}


//MESSAGES

export interface MessagesData {
  messages: Array<MessagePopulated>
}

export interface MessagesVariables {
  conversationId: string
}

export interface MessageSubscriptionData {
  subscriptionData: {
    data: {
      messageSent: MessagePopulated
    }
  }
}
