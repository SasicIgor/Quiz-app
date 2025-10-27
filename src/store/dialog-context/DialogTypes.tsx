export type DialogButtonAction = () => void;

export type DialogState = {
  message: string | null;
  isOpen: boolean;
  action: undefined | DialogButtonAction;
};

export type HandleDialogType = { text: string; func: DialogButtonAction };

export type DialogActions = {
  toggleDialog: () => void;
  handleDialogOpen: (props: HandleDialogType) => void;
  handleDialogClose: () => void;
  handleDialogConfirm: () => void;
};

export type DialogContextType = DialogState & DialogActions;
