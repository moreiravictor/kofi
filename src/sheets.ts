import { CommentsDrawer } from "@/src/components/CommentsDrawer";
import { Comment } from "@/src/requests/services/kofi/models/post";
import { registerSheet, SheetDefinition } from "react-native-actions-sheet";

registerSheet("commentsDrawer", CommentsDrawer);

declare module "react-native-actions-sheet" {
  export interface Sheets {
    commentsDrawer: SheetDefinition<{
      payload: {
        comments: Comment[];
      };
    }>;
  }
}
